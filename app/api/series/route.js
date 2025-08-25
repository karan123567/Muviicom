import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Series from "@/models/Series";

// GET all series
export async function GET() {
  try {
    await dbConnect();
    const series = await Series.find({});
    return NextResponse.json({ success: true, data: series }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST new series
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const newSeries = await Series.create(body);
    return NextResponse.json({ success: true, data: newSeries }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
