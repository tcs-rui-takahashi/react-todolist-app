export function getTitleValidationError(title: string): string | null {
  const s = title.trim();
  if (!s) return "Task cannot be empty";
  if (s.length < 3) return "Task must be at least 3 characters long";
  return null;
}
