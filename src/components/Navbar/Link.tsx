"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type PropsLink = {
  url: string;
  icon?: any;
  text?: string;
  font?: string;
};

const LinkComponent = (props: PropsLink) => {
  const [isActive, setIsActive] = useState<string>("");
  const [icon, setIcon] = useState<any>();
  const [text, setText] = useState<string>();
  const [one, setOne] = useState<boolean>(false);
  const url = usePathname();
  useEffect(() => {
    setIsActive(url);
    if (props.icon && props.text) {
      setText(props.text);
      setIcon(props.icon);
    } else if (props.icon) {
      setIcon(props.icon);
      setOne(true);
    } else {
      setOne(true);
      setText(props.text);
    }
  }, [url, props.icon, props.text]);
  return (
    <Link
      href={props.url}
      className={`${
        isActive === props.url ? "text-green-500 w-8 scale-150" : "w-8"
      } ${one ? null : "flex space-x-4 py-[4px] justify-between items-center"}`}
    >
      <p>{icon}</p>
      <p className={`text-3xl`}>{text}</p>
    </Link>
  );
};

export default LinkComponent;
