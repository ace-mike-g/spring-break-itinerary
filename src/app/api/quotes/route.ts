import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const quotes = await prisma.quote.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(quotes);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { author, text } = body;

  if (!author || !text) {
    return NextResponse.json(
      { error: "Author and text are required" },
      { status: 400 }
    );
  }

  if (author.length > 100 || text.length > 500) {
    return NextResponse.json(
      { error: "Author max 100 chars, text max 500 chars" },
      { status: 400 }
    );
  }

  const quote = await prisma.quote.create({
    data: { author: author.trim(), text: text.trim() },
  });

  return NextResponse.json(quote, { status: 201 });
}
