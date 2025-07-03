import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("req", req);
  return NextResponse.json({ msg: "I am Rohit from India" });
}