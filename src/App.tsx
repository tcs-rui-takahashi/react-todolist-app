import { useState } from "react";
import TodoItem from "./components/TodoItem";

type Todo = { id: string; title: string; completed: boolean };

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Build TodoItem skeleton", completed: false },
    { id: "2", title: "Wire callbacks", completed: true },
    { id: "3", title: "Render with map()", completed: false },
  ]);

  const handleToggle = (id: string, nextCompleted: boolean) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: nextCompleted } : t))
    );
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-3">Todo</h1>
      <div className="space-y-2" role="list">
        {todos.map((t) => (
          <TodoItem
            id={t.id}
            title={t.title}
            completed={t.completed}
            onToggle={(completed) => handleToggle(t.id, completed)}
            onDelete={() => handleDelete(t.id)}
          />
        ))}
      </div>
    </main>
  );
}
