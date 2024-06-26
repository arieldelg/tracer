"use client";
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
  disable?: boolean;
  bgColor?: string;
  bgColorTailwind?: string;
  font?: string;
  fontTailwind?:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl";
  color?: string;
  colorTailwind?: string;
  shadowBoxTailwind?: string;
  boxShadow?: string;
};

const Input = (props: PropsInput) => {
  return (
    <input
      style={{
        backgroundColor: props.bgColor,
        fontSize: props.font,
        color: props.color,
        boxShadow: props.boxShadow,
      }}
      type={props.type}
      name={props.name === undefined ? "search" : props.name}
      id={props.id === undefined ? "search" : props.id}
      placeholder={
        props.placeholder === undefined ? "Type anything" : props.placeholder
      }
      className={`w-full h-16 text-${
        props.border !== undefined ? props.border : "border-none"
      } ${props.rounded !== null ? props.rounded : "rounded-none"} ${
        props.bgColorTailwind ? props.bgColorTailwind : "bg-[#222222]"
      } outline-none p-2 ${
        props.fontTailwind ? props.fontTailwind : "text-xl"
      } ${props.colorTailwind ? props.colorTailwind : null} ${
        props.colorTailwind ? "placeholder:text-black/50" : null
      } ${props.shadowBoxTailwind ? props.shadowBoxTailwind : null} border`}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        props.setValue(e.target.value)
      }
      onKeyDown={(event) => {
        if (props.enterSearch !== undefined) {
          props.enterSearch(event);
        }
      }}
      value={props.value}
      disabled={props.disable}
    />
  );
};

export default Input;
