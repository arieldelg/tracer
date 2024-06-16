"use client";
import { useState, KeyboardEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

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
          <input
            name="search"
            id="search"
            placeholder="Type anything"
            className="w-full h-16  outline-none bg-transparent p-2  text-xl"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(event) => enterSearch(event)}
            // onKeyDown={(e) => enterSearch(e)}
          />
          <MagnifyingGlassIcon className="w-10" />
        </div>
      </div>
    </section>
  );
};

export default Search;
