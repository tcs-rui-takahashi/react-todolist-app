export const FILTER_TABS = ["all", "active", "completed"] as const;
export type FilterTab = typeof FILTER_TABS[number];
