import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import { compare, hash } from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json(
    { message: 'This route is for POST change-password requests' },
    { status: 401 },
  );
}
export async function POST(req: NextRequest) {
  console.log('user try to change password');
  try {
    const session = await auth();
    console.log(session);

    if (!session || !session.user || !session.user.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { currentPassword, newPassword } = await req.json();

    const userEmail = session.user.email;

    const user = await db.user.findUnique({
      where: { email: userEmail },
    });

    if (!user || !user.password) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const isPasswordCorrect = await compare(currentPassword, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: 'Current password is incorrect' },
        { status: 401 },
      );
    }

    const hashedPassword = await hash(newPassword, 12);

    await db.user.update({
      where: { email: userEmail },
      data: { password: hashedPassword },
    });

    return NextResponse.json(
      { message: 'Password updated successfully' },
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
