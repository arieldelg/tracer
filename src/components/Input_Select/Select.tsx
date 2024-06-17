import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Option from "./Option";
import { Dispatch, SetStateAction, useState } from "react";

type PropSelect = {
  optionsSelect: string[];
  setSelect: Dispatch<SetStateAction<string>>;
};

const Select = ({ optionsSelect, setSelect }: PropSelect) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleSelectOption = (selection: string) => {
    setSelect(selection);
    setOpen(false);
  };
  return (
    <section className=" border rounded-xl h-16 shadow-3xl space-y-2">
      <div
        className="flex items-center justify-between p-4"
        onClick={() => setOpen((prev) => !prev)}
      >
        <h1 className="text-xl font-bold">Select an Option</h1>
        <ChevronDownIcon className="w-8" />
      </div>
      {open && (
        <div className="border rounded-lg shadow-3xl z-50 bg-[#222222]">
          {optionsSelect.map((element, index) => {
            if (index === optionsSelect.length - 1) {
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
