import { useEffect, useState } from "react";

function readFromStorage<T>(key: string, fallback: T): T {
  const storedValue = window.localStorage.getItem(key);
  if (storedValue === null) return fallback;
  try {
    return JSON.parse(storedValue) as T;
  } catch (e) {
    if (import.meta.env.MODE !== "production") {
      console.warn("[useLocalStorage] parse failed", e);
    }
    return fallback;
  }
}

export function useLocalStorage<T>(key: string, initialValue: T) {
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
