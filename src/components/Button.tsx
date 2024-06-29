"use client";
import { useRouter } from "next/navigation";
import React from // DetailedHTMLProps, // ButtonHTMLAttributes,
// useEffect,
// useState,
"react";

type Props = {
  name: string;
  color?: string;
  bgColorTailwind?: string;
  url?: string;
  children?: React.ReactNode;
  onlyOne?: boolean;
  font?: string;
  fetch?: any;
  onClick?: () => void;
  loading?: boolean;
};

const Button = (props: Props) => {
  const router = useRouter();
  // const [type, setType] = useState<"button" | "submit" | "reset" | undefined>(
  //   "button"
  // );
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
  // useEffect(() => {
  //   if (props.name !== "Edit") {
  //     setType("submit");
  //   } else {
  //     setType("button");
  //   }
  // }, [props.name]);
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
  } else {
    return (
      <button
        style={{ backgroundColor: props.color }}
        type="submit"
        className={`${props.onlyOne ? "w-full" : "w-1/2"} ${
          props.bgColorTailwind
        } h-16 ${handleColor()} rounded-lg border text-2xl font-bold ${
          props.children ? "flex items-center justify-center gap-4 px-4" : null
        } ${props.font && props.font}`}
        onClick={() => {
          if (props.onClick) {
            return props.onClick();
          }
        }}
      >
        {props.loading ? (
          props.children
        ) : (
          <>
            {props.children}
            {props.name}
          </>
        )}
      </button>
    );
  }
};

export default Button;
