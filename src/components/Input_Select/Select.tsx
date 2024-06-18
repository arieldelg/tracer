"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Option from "./Option";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import React from "react";

type PropSelect = {
  optionsSelect: string[];
  setSelect: Dispatch<SetStateAction<string>>;
  select: string;
};

const Select = (props: PropSelect) => {
  // ! state to control open or close options
  const [open, setOpen] = useState<boolean>(false);
  const [placeholder, setPlaceHolder] = useState<string>("");

  // ! function that handles the value selected to a form and close the options
  const handleSelectOption = (selection: string) => {
    props.setSelect(selection);
    setOpen(false);
  };
  useEffect(() => {
    if (props.select.length === 0) {
      setPlaceHolder("Select an option");
    } else {
      setPlaceHolder(props.select);
    }
  }, [props.select]);
  return (
    <section className=" border rounded-xl h-16 shadow-3xl space-y-2 w-full">
      <button
        className="flex items-center justify-between p-4 relative w-full h-full text-2xl font-bold"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        {placeholder}
        <ChevronDownIcon className="w-8" />
      </button>

      {open && (
        <div
          className={`border rounded-lg w-[calc(100%-48px)] shadow-3xl absolute bg-[#222222]`}
        >
          {props.optionsSelect.map((element, index) => {
            if (index === props.optionsSelect.length - 1) {
              return (
                <Option
                  key={element}
                  name={element}
                  last={true}
                  handleSelectOption={handleSelectOption}
                />
              );
            }
            return (
              <Option
                key={element}
                name={element}
                handleSelectOption={handleSelectOption}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Select;
