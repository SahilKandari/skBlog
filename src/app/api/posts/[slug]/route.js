import { NextResponse } from "next/server";
import { prisma } from "../../../utils/connect";

// GET Single Post
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ response: "Something went wrong" }, { status: 500 })
    );
  }
};