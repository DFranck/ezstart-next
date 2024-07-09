import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ message: "This route is for update username" });
}
export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
  try {
    const body = await req.json();
    const { name, email } = body;

    const user = await db.user.update({
      where: { email },
      data: { name },
    });

    return NextResponse.json(
      {
        message: `Updated user name: ${user.email} is now ${user.name}`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
