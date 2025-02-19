import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache"; // ✅ Ensure Next.js refreshes data
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Add this to your .env file
  apiVersion: "2023-01-01" // Add this line with the latest API version
});

export async function POST(req) {
  try {
    const { postId, author, text, parent } = await req.json();

    if (!author.trim() || !text.trim()) {
      return NextResponse.json(
        { message: "Name and comment are required" },
        { status: 400 }
      );
    }

    const commentData = {
      _type: "comment",
      post: { _type: "reference", _ref: postId },
      author,
      text,
      createdAt: new Date().toISOString(),
    };

    console.log("TESTE"+parent)
    if (parent) {
      commentData.parent = { _type: "reference", _ref: parent }; // ✅ Store reply reference
    }

    const comment = await client.create(commentData);

    revalidatePath(`/post/${postId}`);

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error saving comment" },
      { status: 500 }
    );
  }
}

