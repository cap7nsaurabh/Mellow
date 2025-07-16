import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoConnect";
import Mood from "@/models/moods";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

// GET: List all moods
export async function GET() {
  await dbConnect();
  const moods = await Mood.find({});
  return NextResponse.json({ moods });
}

// POST: Add a new mood (admin only)
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  await dbConnect();
  const { name, emoji, color } = await req.json();
  const mood = await Mood.create({ name, emoji, color });
  return NextResponse.json({ mood });
}
