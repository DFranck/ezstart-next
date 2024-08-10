import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'This route is for updating the user' });
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, ...updateData } = body;

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 },
      );
    }

    const user = await db.user.update({
      where: { email },
      data: updateData,
    });

    return NextResponse.json(
      {
        message: `User updated successfully`,
        user,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 },
    );
  }
}
