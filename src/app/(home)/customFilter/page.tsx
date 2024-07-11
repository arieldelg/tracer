"use client";
import { Button } from "@/components";
import { roboto } from "@/config/fonts";
// import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

const arrayOptions = [
  { name: "Completed" },
  { name: "unResolved" },
  { name: "Owner" },
  { name: "Priority" },
];

const arrayOptionsSubCategory = [
  { name: "High" },
  { name: "Medium" },
  { name: "Low" },
];

const CustomFilter = () => {
  const route = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [openSubCategory, setOpenSubCategory] = useState<boolean>(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const handleFilter = () => {
    if (selectedOption === "Completed") {
      // setCookie("filterTracer", "complete_-1");
      route.replace(`/tracer?complete=true`);
    }
    if (selectedOption === "unResolved") {
      route.replace(`/tracer?complete=false`);
    }

    arrayOptionsSubCategory.forEach((element) => {
      if (element.name === selectedSubCategory) {
        route.replace(`/tracer?priority=${selectedSubCategory}`);
      }
    });
    // console.log(selectedSubCategory);
    // console.log(arrayOK, "boolean");
  };
  return (
    <section
      className={`${roboto.className} w-full h-[calc(100vh-172px)] flex flex-col justify-between pb-4`}
    >
      <div className="space-y-4">
        <h1 className="text-2xl">Filter By:</h1>
        {
          // ! select - option, should i make a generic component?
        }
        <div className="space-y-2">
          <button
            type="button"
            className={`w-full h-12 border rounded-md text-2xl text-gray-500 bg-[#121111] relative`}
            onClick={() => setOpen((prev) => !prev)}
          >
            {selectedOption.length > 0 ? selectedOption : "Select an option"}
          </button>
          {open && (
            <div className=" bg-[#121111] rounded-lg border text-2xl text-center absolute w-[calc(100%-48px)] z-10">
              {arrayOptions.map((element, index) => {
                if (index !== arrayOptions.length - 1) {
                  return (
                    <p
                      className="border-b p-2"
                      onClick={() => {
                        setOpen(false);
                        setSelectedOption(element.name);
                      }}
                      key={element.name}
                    >
                      {element.name}
                    </p>
                  );
                } else {
                  return (
                    <p
                      className="p-2"
                      onClick={() => {
                        setOpen(false);
                        setSelectedOption(element.name);
                      }}
                      key={element.name}
                    >
                      {element.name}
                    </p>
                  );
                }
              })}
            </div>
          )}
        </div>
        {selectedOption === "Priority" && (
          <div className="pt-4 space-y-2">
            <button
              type="button"
              className={`w-full h-12 border rounded-md text-2xl text-gray-500 bg-[#121111] relative`}
              onClick={() => setOpenSubCategory((prev) => !prev)}
            >
              {selectedSubCategory.length > 0
                ? selectedSubCategory
                : "Select an option"}
            </button>
            {openSubCategory && (
              <div className=" bg-[#121111] rounded-lg border text-2xl text-center absolute w-[calc(100%-48px)]">
                {arrayOptionsSubCategory.map((element, index) => {
                  if (index !== arrayOptions.length - 1) {
                    return (
                      <p
                        className="border-b p-2"
                        onClick={() => {
                          setOpenSubCategory(false);
                          setSelectedSubCategory(element.name);
                        }}
                        key={element.name}
                      >
                        {element.name}
                      </p>
                    );
                  } else {
                    return (
                      <p
                        className="p-2"
                        onClick={() => {
                          setOpenSubCategory(false);
                          setSelectedSubCategory(element.name);
                        }}
                        key={element.name}
                      >
                        {element.name}
                      </p>
                    );
                  }
                })}
              </div>
            )}
          </div>
        )}
      </div>
      <Button
        type="button"
        name="Save"
        onlyOne={true}
        bgColorTailwind="bg-green-500"
        font="text-3xl"
        onClick={() => handleFilter()}
      />
    </section>
  );
};

export default CustomFilter;
