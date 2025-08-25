import { cn } from "../lib/cn";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (completed: boolean) => void;
  onDelete: () => void;
};

export default function TodoItem({
  id,
  title,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <div
      className="flex items-center gap-3 px-3 py-2 rounded-lg border hover:bg-gray-300 dark:hover:bg-gray-800"
      role="listitem"
    >
      <input
        id={id}
        type="checkbox"
        checked={completed}
        onChange={(e) => onToggle(e.target.checked)}
        className={cn("h-4 w-4")}
      />
      <label
        htmlFor={id}
        className={cn(
          "flex-1 text-sm md:text-base",
          completed && "line-through text-gray-400 opacity-60"
        )}
      >
        {title}
      </label>
      <button
        type="button"
        onClick={onDelete}
        aria-label="Delete todo"
        className={cn(
          "text-sm px-2 py-1 rounded-md border",
          " hover:bg-gray-100 dark:hover:bg-gray-700",
          completed && "opacity-80"
        )}
      >
        Delete
      </button>
    </div>
  );
}
