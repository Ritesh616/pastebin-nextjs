import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // 🔥 REQUIRED

export async function POST(req) {
  const { content } = await req.json();

  const paste = await prisma.paste.create({
    data: { content },
  });

  return NextResponse.json({ id: paste.id });
}
