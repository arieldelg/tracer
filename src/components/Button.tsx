import { url } from "inspector";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  name: string;
  color: string;
  url?: string;
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
        className={`w-1/2 h-16 ${handleColor()} rounded-lg border text-2xl font-bold`}
        onClick={() => router.back()}
      >
        {props.name}
      </button>
    );
  } else {
    return (
      <button
        className={`w-1/2 h-16 ${handleColor()} rounded-lg border text-2xl font-bold`}
      >
        {props.name}
      </button>
    );
  }
};

export default Button;
