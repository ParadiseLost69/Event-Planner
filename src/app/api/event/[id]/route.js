import connectMongoDB from "@/lib/mongodb.js";
import Event from "@/models/event";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const id = params.id;

    await connectMongoDB();

    // Find the event by ID
    const event = await Event.findById(id);

    // Check if the event exists

    return NextResponse.json({ event });
  } catch (error) {
    console.error("Error:", error);

    // Handle database connection errors or other internal errors
    return new NextResponse("Error 404: No event found", {
      status: 404,
    });
  }
}
