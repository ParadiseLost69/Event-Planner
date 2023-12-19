import connectMongoDB from "@/lib/mongodb.js";
import Event from "@/models/event";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const events = await Event.find();

  return NextResponse.json({ events });
}
