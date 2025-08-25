import TodoItem from "./components/TodoItem";

export default function App() {
  const dummy = { id: "1", title: "Build TodoItem skeleton", completed: false };
  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-semibold mb-3">Todo</h1>
      <div className="space-y-2" role="list">
        <TodoItem
          title={dummy.title}
          completed={dummy.completed}
          onToggle={(completed) =>
            console.log("toggle", dummy.id, "->", completed)
          }
          onDelete={() => console.log("delete", dummy.id)}
        />
      </div>
    </main>
  );
}
