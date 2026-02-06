import { NextResponse } from "next/server";
import { runMarketMaker } from "@/lib/marketMaker";

export async function POST(req: Request) {
  const body = await req.json();

  await runMarketMaker(body.spread);

  return NextResponse.json({ status: "running" });
}
