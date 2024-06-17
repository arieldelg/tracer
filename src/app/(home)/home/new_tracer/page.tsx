"use client";
import Input from "@/components/Input";
import Select from "@/components/Input_Select/Select";
import { useState } from "react";

const NewTracer = () => {
  const [value, setValue] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  console.log(select);
  return (
    <section className="space-y-8">
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
      <div className="flex flex-col space-y-4">
        <label htmlFor="priority-select" className="text-3xl font-bold">
          Priority
        </label>
        <Select
          optionsSelect={["High", "Medium", "Low"]}
          setSelect={setSelect}
        />
        {/* <select
          name="priority"
          id="priority-select"
          className="h-16 bg-transparent border rounded-xl text-xl p-2"
          onChange={handleSelect}
        >
          <option value="">--Please choose an option</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
        </select> */}
      </div>
    </section>
  );
};

export default NewTracer;
