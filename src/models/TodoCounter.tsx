import { Props } from "./React";

export interface TodoCounterProps extends Props {
  completedTodos: number;
  allTodos: number;
}