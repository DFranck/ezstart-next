import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { resetCode, password } = body;

  if (!resetCode || !password) {
    return NextResponse.json(
      { message: 'Missing reset code or password' },
      { status: 400 },
    );
  }

  const user = await db.user.findUnique({ where: { resetCode: resetCode } });
  if (
    !user ||
    !user.resetCodeExpiresAt ||
    new Date() > user.resetCodeExpiresAt
  ) {
    return NextResponse.json(
      { message: 'Invalid or expired reset code' },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.user.update({
    where: { resetCode: resetCode },
    data: {
      password: hashedPassword,
      resetCode: null,
      resetCodeExpiresAt: null,
    },
  });

  return NextResponse.json({ message: 'Password updated' }, { status: 200 });
}
