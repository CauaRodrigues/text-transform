import { NextResponse } from "next/server";

import RawData from "./data.json";

export async function GET() {
  const data = RawData;

  return NextResponse.json({ data });
}
