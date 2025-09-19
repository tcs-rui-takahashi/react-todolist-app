export const FilterTab = {
  All: "all",
  Active: "active",
  Completed: "completed",
} as const;

export type FilterTab = (typeof FilterTab)[keyof typeof FilterTab];

export type FilterCounts = {
  all: number;
  active: number;
  completed: number;
};
