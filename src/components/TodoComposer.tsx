import { useState } from "react";
import { validateTitle } from "../lib/validateTodo";

type Props = {
  onAdd: (title: string) => void;
};

export default function TodoComposer({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const err = validateTitle(title);
    if (err) {
      setError(err);
      return;
    }

    onAdd(title.trim());
    setTitle("");
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error) setError(null);
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
