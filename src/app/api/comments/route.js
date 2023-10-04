import { NextResponse } from "next/server";
import { prisma } from "../../utils/connect";
import { getAuthSession } from "@/app/utils/auth";

// GET All Comments of a Post
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug =  searchParams.get("postSlug")

  try {
    const comments = await prisma.comment.findMany({
      where: { 
        ...(postSlug && {postSlug}),
      },
      include: { user: true },
    }) 
    return new NextResponse(JSON.stringify( comments, { status: 200 }));
  } catch (error) {
    console.error("Error fetching comments:", error);
    return new NextResponse(
      JSON.stringify({ response: `Error: ${error.message}` }, { status: 500 })
    );
  }
};

// Create Comments for a Post
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ response: 'Not Authenticated!' }, { status: 401 })
    );
  }

  try {
    const body = await req.json()
    console.log(body);
    const comment = await prisma.comment.create({
      data: {...body, userEmail: session.user.email}
    })
    return new NextResponse(JSON.stringify(comment, {status: 200}))
  } catch (error) {
    console.error("Error Creating Comment:", error);
    return new NextResponse(
      JSON.stringify({ response: `Error: ${error.message}` }, { status: 500 })
    );
  }
};