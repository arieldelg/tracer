"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Input_Select/Select";
import { addTracerServerAction } from "@/services/actions";
import { CiCircleCheck } from "react-icons/ci";
import { roboto } from "@/app/fonts";

type Response = {
  message: string;
  status: number;
  ok: boolean;
};

const AddTracerClientSide = () => {
  const [value, setValue] = useState<string>("");
  const [textarea, setTextArea] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [status, setStatus] = useState<Response>();
  const [ok, setOk] = useState<boolean>();
  const handleSendData = async () => {
    setValue("");
    setTextArea("");
    setSelect("");
    const response = await addTracerServerAction({
      title: value,
      priority: select,
      text: textarea,
      url: "http://localhost:3000/api/postTracer",
    });
    if (response !== undefined) {
      setStatus(response);
      setOk(response.ok);
    }
  };
  useEffect(() => {
    if (status !== undefined && status.ok) {
      setTimeout(() => {
        setOk(false);
      }, 2000);
    }
  }, [status]);
  return (
    <>
      {status?.ok && (
        <div
          className={`bg-white rounded-xl text-black left-[calc(50%-156px)]   w-[312px] h-20 flex items-center justify-center space-x-4 absolute ${
            ok
              ? "shadow-5xl transition-all translate-y-full duration-500"
              : "transition-all -translate-y-[258px] duration-500"
          }`}
        >
          <CiCircleCheck size={40} className="text-green-500" />
          <p className={`text-2xl ${roboto.className} `}>{status.message}</p>
        </div>
      )}
      {
        // ! Here goes the label and input of title CLIENT
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
        // ! Here goes the label and input of Select-Option CLIENT
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
        // ! Here goes the label and text of the tracer CLIENT
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
          value={textarea}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setTextArea(e.target.value)
          }
        />
      </div>
      {
        // ! here goes the button to cancel or save (fetch API) the tracer CLIENT
      }
      <div className="flex justify-between space-x-4">
        <Button name="Cancel" color="red" url="back" onlyOne={false} />
        <Button
          name="Save"
          color="green"
          onlyOne={false}
          fetch={() => handleSendData()}
          // catchError={setError}
          // setStatus={setStatus}
        />
      </div>
    </>
  );
};

export default AddTracerClientSide;
