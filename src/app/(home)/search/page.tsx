"use client";
import { useState, KeyboardEvent, ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Input from "@/components/Input";

const Search = () => {
  const [value, setValue] = useState<string>("");
  const enterSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      console.log(event.code);
    }
  };
  return (
    <section className="w-full h-auto px-6 py-4">
      <div className="space-y-4">
        <h1 className="text-2xl">Search:</h1>
        <div className="flex border shadow-3xl px-4 rounded-xl">
          <Input
            setValue={setValue}
            value={value}
            enterSearch={enterSearch}
            type="text"
          />
          <MagnifyingGlassIcon className="w-10" />
        </div>
      </div>
    </section>
  );
};

export default Search;