import type { FilterTab } from "../types/filter";
import type { Todo } from "../types/todo";

export function applyFilter(todos: Todo[], tab: FilterTab): Todo[] {
  switch (tab) {
    case "active":
      return todos.filter((t) => !t.completed);
    case "completed":
      return todos.filter((t) => t.completed);
    case "all":
      return todos;
  }
}

export function countByFilter(todos: Todo[]) {
  const all = todos.length;
  const active = todos.reduce((acc, t) => acc + (t.completed ? 0 : 1), 0);
  const completed = all - active;
  return { all, active, completed };
}
