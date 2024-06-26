"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  name: string;
  color?: string;
  colorTailwind?: string;
  url?: string;
  children?: React.ReactNode;
  onlyOne: boolean;
  font?: string;
  fetch?: any;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const router = useRouter();
  const handleColor = () => {
    let color: string;
    switch (props.color) {
      case "green":
        color = "bg-green-500";
        break;
      case "red":
        color = "bg-red-500";
        break;
      default:
        color = "bg-[#222222]";
    }
    return color;
  };

  if (props.url === "back") {
    return (
      <button
        className={`${
          props.onlyOne ? "w-full" : "w-1/2"
        } h-16 ${handleColor()} rounded-lg border text-2xl font-bold ${
          props.children ? "flex items-center justify-center gap-4 px-4" : null
        } ${props.font && props.font}
        `}
        onClick={() => router.back()}
      >
        {props.children} {props.name}
      </button>
    );
  } else if (props.fetch) {
    return (
      <button
        className={`${
          props.onlyOne ? "w-full" : "w-1/2"
        } h-16 ${handleColor()} rounded-lg border text-2xl font-bold ${
          props.children ? "flex items-center justify-center gap-4 px-4" : null
        } ${props.font && props.font}`}
        onClick={() => props.fetch()}
      >
        {props.children} {props.name}
      </button>
    );
  } else {
    props.onClick;
    return (
      <button
        style={{ backgroundColor: props.color }}
        className={`${props.onlyOne ? "w-full" : "w-1/2"} ${
          props.colorTailwind
        } h-16 ${handleColor()} rounded-lg border text-2xl font-bold ${
          props.children ? "flex items-center justify-center gap-4 px-4" : null
        } ${props.font && props.font}`}
        onClick={() => {
          if (props.onClick) {
            return props.onClick();
          }
        }}
      >
        {props.children} {props.name}
      </button>
    );
  }
};

export default Button;
