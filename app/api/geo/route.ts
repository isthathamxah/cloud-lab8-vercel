export const runtime = "edge";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  
  const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
  const geoData = await geoRes.json();

  return NextResponse.json({
    country: geoData.country || "Unknown",
    city: geoData.city || "Unknown",
    ip: ip,
    runtime: "edge",
  });
}