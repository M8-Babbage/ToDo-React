export type Todo = {
  text: string,
  completed: boolean,
  onDelete?: () => void,
  onToggle?: () => void
}