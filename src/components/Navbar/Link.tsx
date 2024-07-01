"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type PropsLink = {
  url: string;
  icon?: JSX.Element;
  text?: string;
  onClick?: React.Dispatch<React.SetStateAction<boolean>>;
};

const LinkComponent = (props: PropsLink) => {
  const [icon, setIcon] = useState<JSX.Element>();
  const [text, setText] = useState<string>();
  const [one, setOne] = useState<boolean>(false);
  const url = usePathname();
  useEffect(() => {
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
  }, [props.icon, props.text]);

  return (
    <Link
      href={props.url}
      className={` ${one ? null : "flex space-x-4 py-[4px] items-center"}`}
      onClick={() => {
        if (props.onClick) {
          return props.onClick(false);
        }
      }}
    >
      <p
        className={`${
          url === props.url ? `text-green-500 w-8 scale-150 delay-75 ` : "w-8"
        }`}
      >
        {icon}
      </p>
      <p className={`text-3xl`}>{text}</p>
    </Link>
  );
};

export default LinkComponent;
