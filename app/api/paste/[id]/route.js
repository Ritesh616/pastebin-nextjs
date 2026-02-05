import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  const paste = await prisma.paste.findUnique({
    where: { id: params.id },
  });

  if (!paste) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    content: paste.content,
  });
}
