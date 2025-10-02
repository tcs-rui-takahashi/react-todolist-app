import { useEffect, useState, useRef } from "react";

const isFn = <T>(v: T | (() => T)): v is () => T => typeof v === "function";

function resolveInitial<T>(initial: T | (() => T)): T {
  return isFn(initial) ? initial() : initial;
}

function readFromStorage<T>(key: string, fallback: T): T {
  const storedValue = window.localStorage.getItem(key);
  if (storedValue === null) return fallback;
  try {
    return JSON.parse(storedValue) as T;
  } catch (e) {
    if (import.meta.env.MODE !== "production") {
      console.warn("[useLocalStorage] parse failed", e);
    }
  }
  return fallback;
}

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const initialRef = useRef<T>(resolveInitial(initialValue));

  const [value, setValue] = useState<T>(() =>
    readFromStorage<T>(key, initialRef.current)
  );

  useEffect(() => {
    setValue(readFromStorage<T>(key, initialRef.current));
  }, [key]);

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
