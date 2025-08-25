import { useState } from "react";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "Build TodoItem skeleton",
    completed: false,
  });

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-3">Todo</h1>
      <div className="space-y-2" role="list">
        <TodoItem
          id={`todo-item-${todo.id}`}
          title={todo.title}
          completed={todo.completed}
          onToggle={(nextCompleted) => {
            console.log("toggle", todo.id, "->", nextCompleted);
            setTodo((prev) => ({ ...prev, completed: nextCompleted }));
          }}
          onDelete={() => console.log("delete", todo.id)}
        />
      </div>
    </main>
  );
}
