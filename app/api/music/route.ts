import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoConnect";
import Music from "@/models/Music";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  await dbConnect();
  const music = await Music.find({});
  return NextResponse.json({ music });
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  await dbConnect();
  const { title, artist, mood, thumbnailUrl, musicUrl, date, duration } = await req.json();
  const music = await Music.create({
    title, artist, mood, thumbnailUrl, musicUrl,
    date: date ? new Date(date) : undefined,
    duration: Number(duration)
  });
  return NextResponse.json({ music });
}
