import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Movie from "@/models/Movie";

// GET all movies
export async function GET() {
  try {
    await dbConnect();
    const movies = await Movie.find({});
    return NextResponse.json({ success: true, data: movies }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST create new movie
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const newMovie = await Movie.create(body);
    return NextResponse.json({ success: true, data: newMovie }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
