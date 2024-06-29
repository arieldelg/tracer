"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Option from "./Option";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import React from "react";

type PropSelect = {
  optionsSelect: string[];
  select: {
    title: string;
    priority: string;
    complete: boolean;
    text: string;
  };
  setSelect: Dispatch<
    SetStateAction<{
      title: string;
      priority: string;
      complete: boolean;
      text: string;
    }>
  >;
  height: number;
  width: string | number;
  disable?: boolean;
  colorTailwind?: string;
  bgTailwind?: string;
  color?: string;
  backgroundColor?: string;
  shadowTailwind?: string;
  boxShadow?: string;
};

const Select = (props: PropSelect) => {
  // ! state to control open or close options
  const [open, setOpen] = useState<boolean>(false);
  const [placeholder, setPlaceHolder] = useState<string>("");

  // ! function that handles the value selected to a form and close the options
  const handleSelectOption = (selection: string) => {
    props.setSelect({
      ...props.select,
      priority: selection,
    });
    setOpen(false);
  };
  useEffect(() => {
    if (props.select.priority.length === 0) {
      setPlaceHolder("Select an option");
    } else {
      setPlaceHolder(props.select.priority);
    }
  }, [props.select]);

  return (
    <section
      className=" space-y-2 w-full"
      style={{ height: props.height, width: props.width }}
    >
      <button
        style={{
          backgroundColor: props.backgroundColor,
          color: props.color,
          boxShadow: props.boxShadow,
        }}
        className={`flex items-center text-start justify-between px-4 relative w-full h-full text-base font-bold rounded-xl border ${props.shadowTailwind} ${props.bgTailwind} ${props.colorTailwind}`}
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        disabled={props.disable}
      >
        {placeholder}
        <ChevronDownIcon className="w-8" />
      </button>

      {open && (
        <div
          className={`border rounded-lg w-[calc(50%-35px)] shadow-3xl absolute ${
            props.bgTailwind ? "bg-white" : "bg-[#222222]"
          } ${props.colorTailwind ? props.colorTailwind : null}`}
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
