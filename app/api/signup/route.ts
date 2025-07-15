import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  await dbConnect();

  const { name, email, password } = await req.json();

  // Check for existing user
  const existing = await User.findOne({ email });
  if (existing) {
    console.log(existing);
    return NextResponse.json({ error: "Email already in use" }, { status: 400 });
  }

  // Hash password
  const hashed = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({ name, email, password: hashed });

  return NextResponse.json({
    user: { id: user._id, name: user.name, email: user.email },
  });
}
