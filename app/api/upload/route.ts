import { NextResponse } from "next/server";
import { uploadToS3 } from "@/lib/s3";

export const maxDuration = 400; // optional: limit to 1 minute per request

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  try {
    const url = await uploadToS3(file);
    return NextResponse.json({ url });
  } catch (err) {
    return NextResponse.json({ error: "Upload failed", details: err as Error }, { status: 500 });
  }
}
