// src/__tests__/middlewares/user-agent-middleware.test.ts

import { NextRequest } from "next/server";
import { userAgentMiddleware } from "../../middlewares/user-agent-middleware";

jest.mock("ua-parser-js");

describe("userAgentMiddleware", () => {
  it("should set x-device-type header based on user-agent", () => {
    const req = {
      headers: {
        get: jest
          .fn()
          .mockReturnValue(
            "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1"
          ),
      },
    } as unknown as NextRequest;

    const res = userAgentMiddleware(req);

    expect(res.headers.get("x-device-type")).toBe("mobile");
  });

  it("should default to desktop if device type is not found", () => {
    const req = {
      headers: {
        get: jest
          .fn()
          .mockReturnValue(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
          ),
      },
    } as unknown as NextRequest;

    const res = userAgentMiddleware(req);

    expect(res.headers.get("x-device-type")).toBe("desktop");
  });

  it("should log user-agent and device type", () => {
    console.log = jest.fn();

    const req = {
      headers: {
        get: jest
          .fn()
          .mockReturnValue(
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
          ),
      },
    } as unknown as NextRequest;

    userAgentMiddleware(req);

    expect(console.log).toHaveBeenCalledWith(
      "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    );
    expect(console.log).toHaveBeenCalledWith("Device Type: desktop");
  });
});
