import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 },
    );
  }

  const body = await req.json();
  const { email, role } = body;

  if (!email || !role) {
    return NextResponse.json(
      { message: 'Email and role are required' },
      { status: 400 },
    );
  }

  try {
    const user = await db.user.update({
      where: { email },
      data: { role },
    });

    return NextResponse.json(
      {
        message: `Updated user role: ${user.email} is now an ${user.role}`,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error updating user role:', error);
    return NextResponse.json(
      { message: 'Error updating user role' },
      { status: 500 },
    );
  } finally {
    await db.$disconnect();
  }
}

// Invoke-WebRequest -Uri "http://localhost:3000/api/auth/update-roles" `
// -Method POST `
// -ContentType "application/json" `
// -Body '{"email": "test@test.fr", "role": "admin"}'
