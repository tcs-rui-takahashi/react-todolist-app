import { cn } from "../lib/cn";
import type { Todo } from "../types/todo";

export type TodoItemProps = {
  todo: Todo;
  onToggle: (completed: boolean) => void;
  onDelete: () => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const inputId = `todo-item-${todo.id}`;

  return (
    <div
      className="flex items-center gap-3 px-3 py-2 rounded-xl ring-1 ring-gray-200 transition-colors hover:bg-gray-50 hover:ring-gray-300 dark:hover:bg-gray-800"
      role="listitem"
    >
      <input
        id={inputId}
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onToggle(e.target.checked)}
        className="h-4 w-4 focus-visible:outline-1 focus-visible:outline-blue-600"
      />
      <label
        htmlFor={inputId}
        className={cn(
          "flex-1 min-w-0 text-sm break-words",
          todo.completed && "line-through text-gray-400 opacity-60"
        )}
      >
        {todo.title}
      </label>
      <button
        type="button"
        onClick={() => onDelete()}
        aria-label="Delete todo"
        className="text-sm px-2 py-1 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:outline-1 focus-visible:outline-blue-600"
      >
        Delete
      </button>
    </div>
  );
}
