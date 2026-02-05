import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { content } = body;

    if (!content || typeof content !== "string" || !content.trim()) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    const paste = await prisma.paste.create({
      data: { content },
    });

    return NextResponse.json(
      {
        id: paste.id,
        url: `/paste/${paste.id}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/paste error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
