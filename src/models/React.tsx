import { Dispatch, SetStateAction, ChangeEvent, MouseEvent } from "react";

// Type to receive properties from the parent component.
export interface Props {
  children?: React.ReactNode;
}

// Type to receive the event of the input.
export type InputEvent = ChangeEvent<HTMLInputElement>;

// Type to receive the event of the button.
export type ButtonEvent = MouseEvent<HTMLButtonElement>

// Type to receive props using the "hook" method useState().
export type Dispatcher<T> = Dispatch<SetStateAction<T>>