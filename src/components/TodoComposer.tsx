import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export default function TodoComposer({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      setError("Task cannot be empty");
      return;
    }
    if (trimmed.length < 3) {
      setError("Task must be at least 3 characters long");
      return;
    }

    onAdd(trimmed);
    setTitle("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error) setError("");
        }}
        placeholder="Add a new task"
        aria-label="Add a task"
        className="w-full rounded-md border px-3 py-2 focus-visible:outline-1 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
      />
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
