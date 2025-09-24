import { FilterTab, type FilterCounts } from "../types/filter";
import type { Todo } from "../types/todo";

export function applyFilter(todos: Todo[], tab: FilterTab): Todo[] {
  switch (tab) {
    case FilterTab.Active:
      return todos.filter((t) => !t.completed);
    case FilterTab.Completed:
      return todos.filter((t) => t.completed);
    case FilterTab.All:
      return todos;
  }
}

export function countByFilter(todos: Todo[]): FilterCounts {
  const all = todos.length;
  const active = todos.reduce((acc, t) => acc + (t.completed ? 0 : 1), 0);
  const completed = all - active;
  return { all, active, completed };
}
