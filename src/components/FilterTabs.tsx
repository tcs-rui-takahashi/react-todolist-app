import { cn } from "../lib/cn";
import type { FilterTab } from "../types/filter";

type Props = {
  active: FilterTab;
  onChange: (next: FilterTab) => void;
  counts?: { all: number; active: number; completed: number };
};

const TABS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "ALL" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

export default function FilterTabs({ active, onChange, counts }: Props) {
  return (
    <fieldset className="flex items-center gap-2">
      <legend className="sr-only">Filter todos</legend>

      {TABS.map(({ key, label }) => {
        const badge =
          counts && typeof counts[key] === "number" ? counts[key] : undefined;

        return (
          <div key={key} className="relative">
            <input
              id={`filter-${key}`}
              type="radio"
              name="todo-filter"
              value={key}
              checked={active === key}
              onChange={() => onChange(key)}
              className="peer sr-only"
            />
            <label
              htmlFor={`filter-${key}`}
              className={cn(
                "px-3 py-1.5 rounded-xl ring-1 transition-colors text-sm cursor-pointer select-none",
                "ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 dark:hover:bg-gray-800",
                "peer-focus-visible:outline-1 peer-focus-visible:outline-blue-600",
                "peer-checked:bg-gray-100 peer-checked:ring-gray-300 peer-checked:text-gray-900",
                "bg-white text-gray-700 dark:bg-transparent dark:text-gray-300 dark:peer-checked:text-gray-100"
              )}
            >
              <span>{label}</span>
              {typeof badge === "number" && (
                <span
                  className={cn(
                    "ml-2 inline-block min-w-6 px-1.5 text-center text-xs rounded-lg",
                    "peer-checked:bg-blue-600 peer-checked:text-white",
                    "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                  )}
                  aria-hidden="true"
                >
                  {badge}
                </span>
              )}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}
