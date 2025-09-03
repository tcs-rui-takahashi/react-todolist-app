import { useState } from "react";

export default function TodoComposer() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    console.log("[TodoComposer] add:", trimmed);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        aria-label="Add a task"
        className="w-full rounded-md border px-3 py-2 focus-visible:outline-1 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
      />
    </form>
  );
}
