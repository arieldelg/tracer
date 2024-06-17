// ! Client Component
import {
  ChangeEvent,
  Dispatch,
  HTMLInputTypeAttribute,
  KeyboardEvent,
  SetStateAction,
} from "react";

// ! type for the input

type PropsInput = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  enterSearch?: (event: KeyboardEvent<HTMLInputElement>) => void;
  name?: string | undefined;
  id?: string | undefined;
  type: HTMLInputTypeAttribute;
  placeholder?: string | undefined;
  border?: "border" | "border-2" | "border-4" | "border-8" | undefined;
  rounded?:
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-2xl"
    | null;
};

const Input = (props: PropsInput) => {
  return (
    <input
      type={props.type}
      name={props.name === undefined ? "search" : props.name}
      id={props.id === undefined ? "search" : props.id}
      placeholder={
        props.placeholder === undefined ? "Type anything" : props.placeholder
      }
      className={`w-full h-16 ${
        props.border !== undefined ? props.border : "border-none"
      } ${
        props.rounded !== null ? props.rounded : "rounded-none"
      } outline-none bg-transparent p-2  text-xl border`}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        props.setValue(e.target.value)
      }
      onKeyDown={(event) => {
        if (props.enterSearch !== undefined) {
          props.enterSearch(event);
        }
      }}
      value={props.value}
    />
  );
};

export default Input;
