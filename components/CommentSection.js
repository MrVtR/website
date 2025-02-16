import { useState, useEffect } from "react";

export default function CommentSection({ postId, comments }) {
  const [username, setUsername] = useState("");
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [allComments, setAllComments] = useState(comments);

  // Sync allComments with the initial comments prop
  useEffect(() => {
    setAllComments(comments);
  }, [comments]); // This will run whenever `comments` prop changes

  const handleSubmit = async e => {
    e.preventDefault();
    if (!newComment.trim() || !username.trim()) return;

    setLoading(true);

    const res = await fetch("/api/submitComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId,
        author: username,
        text: newComment
      })
    });

    if (res.ok) {
      const addedComment = await res.json();
      setAllComments([addedComment, ...allComments]);
      setNewComment("");
      setUsername(""); // Clear username field
    }

    setLoading(false);
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold">
        Comentários ({allComments.length}{" "}
        {allComments.length === 1 ? "comentário" : "comentários"})
      </h3>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="mb-2 w-full rounded border p-2"
          placeholder="Digite seu nome"
          required
        />
        <textarea
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          className="w-full rounded border p-2"
          placeholder="Escreva um comentário..."
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded bg-green-500 px-4 py-2 text-white">
          {loading ? "Enviando..." : "Enviar Comentário"}
        </button>
      </form>

      <div className="mt-6 space-y-4">
        {allComments.map(comment => (
          <div key={comment._id} className="rounded border p-4">
            <h4 className="font-semibold">{comment.author}</h4>
            <p className="mt-2">{comment.text}</p>
            <span className="text-xs text-gray-500">
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
