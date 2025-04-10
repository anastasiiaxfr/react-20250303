import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export function GET() {
  revalidateTag("getHeadphones");

  return NextResponse.json({ status: "success" });
}
