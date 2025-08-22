type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
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
        id={`todo-${id}`}
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        className="h-4 w-4"
      />
      <label htmlFor={`todo-${id}`} className="flex-1 text-sm md:text-base">
        {title}
      </label>
      <button
        type="button"
        onClick={() => onDelete(id)}
        aria-label="Delete todo"
        className="text-sm px-2 py-1 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        Delete
      </button>
    </div>
  );
}
