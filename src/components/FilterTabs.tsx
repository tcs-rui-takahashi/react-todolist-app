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
    <div aria-label="Filter todos" className="flex items-center gap-2">
      {TABS.map(({ key, label }) => {
        const isActive = key === active;
        const badge =
          counts && typeof counts[key] === "number" ? counts[key] : undefined;

        return (
          <button
            key={key}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(key)}
            className={cn(
              "px-3 py-1.5 rounded-xl ring-1 transition-colors text-sm",
              "focus-visible:outline-1 focus-visible:outline-blue-600",
              "ring-gray-200 hover:bg-gray-50 hover:ring-gray-300",
              "dark:hover:bg-gray-800",
              isActive
                ? "bg-gray-100 ring-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                : "bg-white text-gray-700 dark:bg-transparent dark:text-gray-300"
            )}
          >
            <span>{label}</span>
            {typeof badge === "number" && (
              <span
                className={cn(
                  "ml-2 inline-block min-w-6 px-1.5 text-center text-xs rounded-lg",
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                )}
                aria-hidden="true"
              >
                {badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
