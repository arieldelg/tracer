"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type PropsLink = {
  url: string;
  icon: any;
  text?: string;
};

const LinkComponent = (props: PropsLink) => {
  const [isActive, setIsActive] = useState<string>("");
  const url = usePathname();
  useEffect(() => {
    setIsActive(url);
  }, [url]);
  return (
    <Link
      href={props.url}
      className={`${
        isActive === props.url ? "text-green-500 w-8 scale-150" : "w-8"
      }`}
    >
      {props.icon || props.text}
    </Link>
  );
};

export default LinkComponent;
