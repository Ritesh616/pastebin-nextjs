import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const { content } = await req.json();

  if (!content || !content.trim()) {
    return NextResponse.json(
      { error: "Content required" },
      { status: 400 }
    );
  }

  const paste = await prisma.paste.create({
    data: { content },
  });

  

return NextResponse.json({
  id: paste.id,
  url: `/paste/${paste.id}`,
});
}