import { NextRequest, NextResponse } from "next/server";
import UAParser from "ua-parser-js";

export function userAgentMiddleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";
  const parser = new UAParser(userAgent);
  const result = parser.getResult();
  const deviceType = result.device.type || "desktop";
  const response = NextResponse.next();
  response.headers.set("x-device-type", deviceType);
  return response;
}
