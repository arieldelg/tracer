"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Input_Select/Select";
import { useState } from "react";

const NewTracer = () => {
  const [value, setValue] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  return (
    <section className="space-y-8">
      {
        // ! Here goes the label and input of title
      }
      <div className="flex flex-col space-y-4">
        <label htmlFor="title" className="text-3xl font-bold">
          Title
        </label>
        <div className="shadow-3xl">
          <Input
            setValue={setValue}
            value={value}
            name="title"
            id="title"
            placeholder="titulo"
            border="border"
            rounded="rounded-xl"
            type="text"
          />
        </div>
      </div>
      {
        // ! Here goes the label and input of Select-Option
      }
      <div className="flex flex-col space-y-4 z-40 w-full">
        <label htmlFor="priority" className="text-3xl font-bold">
          Priority
        </label>
        <Select
          optionsSelect={["High", "Medium", "Low"]}
          setSelect={setSelect}
          select={select}
        />
      </div>
      {
        // ! Here goes the label and text of the tracer
      }
      <div className="flex flex-col space-y-4">
        <label htmlFor="text" className="text-3xl font-bold ">
          Text
        </label>
        <textarea
          name="text"
          id="text"
          className="bg-transparent border rounded-lg h-56 p-2 outline-none text-xl shadow-3xl"
          placeholder="Write something..."
        />
      </div>
      {
        // ! here goes the button to cancel or save the tracer
      }
      <div className="flex justify-between space-x-4">
        <Button name="Cancel" color="red" url="back" onlyOne={false} />
        <Button name="Save" color="green" onlyOne={false} />
      </div>
    </section>
  );
};

export default NewTracer;
