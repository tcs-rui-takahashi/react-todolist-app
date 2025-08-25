import { useId } from "react";

type TodoItemProps = {
  title: string;
  completed: boolean;
  onToggle: (completed: boolean) => void;
  onDelete: () => void;
};

export default function TodoItem({
  title,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) {
  const uid = useId();

  return (
    <div
      className="flex items-center gap-3 px-3 py-2 rounded-lg border hover:bg-gray-300 dark:hover:bg-gray-800"
      role="listitem"
    >
      <input
        id={uid}
        type="checkbox"
        checked={completed}
        onChange={(e) => onToggle(e.target.checked)}
        className="h-4 w-4"
      />
      <label htmlFor={uid} className="flex-1 text-sm md:text-base">
        {title}
      </label>
      <button
        type="button"
        onClick={onDelete}
        aria-label="Delete todo"
        className="text-sm px-2 py-1 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        Delete
      </button>
    </div>
  );
}
