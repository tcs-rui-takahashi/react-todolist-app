import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoComposer from "./components/TodoComposer";
import FilterTabs from "./components/FilterTabs";
import { applyFilter, countByFilter } from "./utils/filters";
import type { Todo } from "./types/todo";
import type { FilterTab } from "./types/filter";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: crypto.randomUUID(),
      title: "Build TodoItem skeleton",
      completed: false,
    },
    { id: crypto.randomUUID(), title: "Wire callbacks", completed: true },
    { id: crypto.randomUUID(), title: "Render with map()", completed: false },
  ]);

  const [filter, setFilter] = useState<FilterTab>("all");

  const handleAdd = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleToggle = (id: string, nextCompleted: boolean) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: nextCompleted } : t))
    );
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const counts = countByFilter(todos);
  const filteredTodos = applyFilter(todos, filter);

  return (
    <main className="w-[480px] mx-auto p-4">
      <h1 className="text-xl font-semibold mb-3">Todo</h1>
      <div className="mb-3">
        <FilterTabs
          active={filter}
          onChange={(next) => setFilter(next)}
          counts={counts}
        />
      </div>
      <TodoComposer onAdd={handleAdd} />
      <div className="space-y-2 h-80 overflow-auto" role="list">
        {filteredTodos.map((t) => (
          <TodoItem
            key={t.id}
            todo={t}
            onToggle={(completed) => handleToggle(t.id, completed)}
            onDelete={() => handleDelete(t.id)}
          />
        ))}
      </div>
    </main>
  );
}
