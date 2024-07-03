import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      {
        message: "Method not allowed",
      },
      {
        status: 405,
      }
    );
  }
  const body = await req.json();
  const { email } = body;
  if (!email) {
    return NextResponse.json(
      {
        message: "Email is required",
      },
      {
        status: 400,
      }
    );
  }
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return NextResponse.json(
      {
        message: "notfound",
      },
      {
        status: 404,
      }
    );
  }
  return NextResponse.json(user);
}
