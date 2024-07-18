import { headers } from "next/headers";

export default async function getDeviceType(): Promise<string> {
  const headersList = headers();
  const deviceType = headersList.get("x-device-type") || "desktop";
  return deviceType;
}
