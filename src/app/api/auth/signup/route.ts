import { db } from '@/lib/db';
import { signUpSchema } from '@/lib/zod';
import { hash } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 },
      );
    }

    const parsedData = signUpSchema.parse(body);
    const hashedPassword = await hash(parsedData.password, 10);
    const user = await db.user.create({
      data: {
        email: parsedData.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: 'User created', user },
      { status: 201 },
    );
  } catch (error: any) {
    console.error('Error during user signup:', error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: 'Validation error', errors: error.errors },
        { status: 400 },
      );
    }

    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return NextResponse.json({ message: 'userExists' }, { status: 409 });
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}
