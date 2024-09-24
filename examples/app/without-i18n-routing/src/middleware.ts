import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // intlMiddleware を実行して、結果を取得
  let response;
  // intlMiddleware がレスポンスを返さなかった場合、デフォルトのNextResponseを作成
  if (!response) {
    response = NextResponse.next();
  }
  // カスタムヘッダーを追加する処理
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
