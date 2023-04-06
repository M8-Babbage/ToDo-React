import { Dispatcher, Props } from "./React";

export interface TodoSearchProps extends Props {
  search: string;
  setSearch: Dispatcher<string>;
}