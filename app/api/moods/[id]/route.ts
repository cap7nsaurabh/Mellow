import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoConnect";


import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import Mood from "@/models/moods";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  await dbConnect();
  await Mood.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}
