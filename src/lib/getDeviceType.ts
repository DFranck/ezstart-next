// src\lib\getDeviceType.ts
import { headers } from 'next/headers';

/**
 * Retrieves the device type from the request headers.
 *
 * @returns A promise that resolves to the device type string, defaulting to "desktop" if not found.
 */
export default async function getDeviceType(): Promise<string> {
  const headersList = headers();
  const deviceType = headersList.get('x-device-type') || 'desktop';
  return deviceType;
}
