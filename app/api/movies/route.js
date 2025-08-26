import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Movie from "@/models/Movie";

// GET all movies
// export async function GET() {
//   try {
//     await dbConnect();
//     const movies = await Movie.find({});
//     return NextResponse.json({ success: true, data: movies }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
export async function GET(request) {
  try {
    await dbConnect();

    // grab query params
    const { searchParams } = new URL(request.url);
    const genre = searchParams.get("genre"); // e.g., /api/movies?genre=Action
    const category = searchParams.get("category"); // optional if you use categories too

    let filter = {};

    if (genre) {
      filter.genres = genre; // finds movies that have this genre in the array
    }

    if (category) {
      filter.categories = category; // if you want categories filter
    }

    const movies = await Movie.find(filter);

    return NextResponse.json({ success: true, data: movies }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
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
