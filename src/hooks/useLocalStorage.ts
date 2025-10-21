import { useEffect, useState } from "react";

function readFromStorage<T>(key: string, fallback: T | (() => T)): T {
  try {
    const storedValue =
      typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
    if (storedValue !== null) return JSON.parse(storedValue) as T;
  } catch (e) {
    if (import.meta.env.MODE !== "production") {
      console.warn("[useLocalStorage] parse failed", e);
    }
  }
  return typeof fallback === "function" ? (fallback as () => T)() : fallback;
}

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() =>
    readFromStorage<T>(key, initialValue)
  );

  useEffect(() => {
    try {
      if (value === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (e) {
      if (import.meta.env.MODE !== "production") {
        console.warn("[useLocalStorage] write failed", e);
      }
    }
  }, [key, value]);

  return [value, setValue] as const;
}
