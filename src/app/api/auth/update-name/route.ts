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
    console.log("");
  }
}
