"use client"
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeButton = ({ postId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    if (liked) return; // Prevent multiple likes per user session

    setLiked(true);
    setLikes(likes + 1);

    // Update likes count in Sanity
    await fetch("/api/post/updateLikes", {
      method: "POST",
      body: JSON.stringify({ postId }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <button onClick={handleLike} className="flex items-center">
      {liked ? <AiFillHeart className="text-red-500 w-[22px] h-[22px]" /> : <AiOutlineHeart className="w-[22px] h-[22px]" />}
      <p className="w-[22px] h-[22px]">{likes}</p>
    </button>
  );
};

export default LikeButton;
