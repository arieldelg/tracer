"use client";
import { setCookie } from "cookies-next";
import { ChangeEvent, useState } from "react";

type Props = {
  currentCookie: string;
};

const TabClientSide = ({ currentCookie }: Props) => {
  const [value, setValue] = useState<string>(currentCookie);
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setCookie("setCookies", event.target.value);
  };
  return (
    <>
      <label htmlFor="cookies" className="text-3xl font-bold">
        Cookies Example:
      </label>
      <input
        type="text"
        name="cookies"
        value={value}
        onChange={handleValue}
        className="text-black h-12 rounded-lg border border-black px-2"
      />
    </>
  );
};

export default TabClientSide;
