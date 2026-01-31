import { prisma } from "../../../lib/prisma";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function PastePage({ params }) {
  const paste = await prisma.paste.findUnique({
    where: { id: params.id },
  });

  if (!paste) {
    notFound();
  }

  return (
    <div style={{ padding: 40, maxWidth: 800, margin: "auto" }}>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          background: "#f5f5f5",
          padding: 20,
          borderRadius: 6,
        }}
      >
        {paste.content}
      </pre>
    </div>
  );
}
