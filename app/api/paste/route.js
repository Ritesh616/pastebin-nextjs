import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { content } = await req.json();
  const paste = await prisma.paste.create({ data: { content }});
  return NextResponse.json({ url: `/paste/${paste.id}` });
}
