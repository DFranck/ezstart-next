import { NextRequest, NextResponse } from 'next/server';
import UAParser from 'ua-parser-js';

/**
 * Middleware to determine the device type from the user agent string
 * and set it in the response headers.
 *
 * @param req - The incoming request object
 * @returns NextResponse with the device type set in headers
 * @path src/middlewares/user-agent-middleware.ts
 */
export function userAgentMiddleware(req: NextRequest): NextResponse {
  // Retrieve the user-agent string from the request headers
  const userAgent = req.headers.get('user-agent') || '';

  if (!userAgent) {
    // Handle the case where user-agent is missing
    const response = NextResponse.next();
    response.headers.set('x-device-type', 'unknown');
    return response;
  }

  // Parse the user-agent string to get device information
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  // Determine the device type, default to 'desktop' if not found
  const deviceType = result.device.type || 'desktop';

  // Create a new response object
  const response = NextResponse.next();

  // Set the device type in the response headers
  response.headers.set('x-device-type', deviceType);

  // Log the user-agent and device type for debugging purposes
  console.log(`User-Agent: ${userAgent.replace(/[\r\n]/g, '')}`);
  console.log(`Device Type: ${deviceType}`);

  return response;
}
