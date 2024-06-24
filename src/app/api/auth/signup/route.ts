import { signUpSchema } from "@/lib/zod";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedData = signUpSchema.parse(body);
    const hashedPassword = await hash(parsedData.password, 10);
    const user = await prisma.user.create({
      data: {
        email: parsedData.email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(
      { message: "User created", user },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
