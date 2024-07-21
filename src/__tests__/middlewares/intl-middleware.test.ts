import { NextRequest, NextResponse } from "next/server";
import middleware, { currentLocale } from "../../middlewares/intl-middleware";

describe("intlMiddleware", () => {
  it("should set the default locale when no locale is in the URL", () => {
    const req = new NextRequest(new URL("http://localhost/somepath"));
    middleware(req as any); // Type assertion to bypass type mismatch for test case
    expect(currentLocale).toBe("en");
  });

  it("should set the correct locale based on the URL", () => {
    const req = new NextRequest(new URL("http://localhost/es/somepath"));
    middleware(req as any); // Type assertion to bypass type mismatch for test case
    expect(currentLocale).toBe("es");
  });

  it("should bypass middleware for static files", () => {
    const req = new NextRequest(new URL("http://localhost/icons/someicon.png"));
    const response = middleware(req as any); // Type assertion to bypass type mismatch for test case
    expect(response).toBe(NextResponse.next());
  });
});
