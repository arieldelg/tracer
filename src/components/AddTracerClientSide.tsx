"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Input_Select/Select";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { roboto } from "@/app/fonts";
import { addTracerServerAction } from "@/services/actions";

const AddTracerClientSide = () => {
  const [value, setValue] = useState<string>("");
  const [textarea, setTextArea] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [status, setStatus] = useState<{ ok: boolean; message: string }>();
  const [send, setSend] = useState<boolean>();
  const [done, setDone] = useState<boolean>(false);

  // ! function that handles reset value when sending data and the fetching directly to the route.ts instead of a server action
  const handleSendData = async () => {
    setValue("");
    setTextArea("");
    setSelect("");
    setSend(true);
    setDone(false);
    const response = await addTracerServerAction({
      title: value,
      priority: select,
      text: textarea,
      complete: done,
    });

    if (!response.ok) {
      const { message, error } = response;
      const errorObject = JSON.parse(error);
      console.log(errorObject);
      return setStatus({
        ok: response.ok,
        message: message,
      });
    } else {
      const { message } = response;
      setStatus({
        ok: true,
        message: message,
      });
    }
  };

  //! useEffect that reset the alerto when sending to it initial position
  useEffect(() => {
    if (status !== undefined) {
      setTimeout(() => {
        setSend(false);
      }, 2000);
    }
  }, [status]);

  return (
    <>
      {
        // ! here goes the status when posting the data
      }
      <div
        className={`bg-white rounded-xl text-black left-[calc(50%-156px)]  w-[312px] h-28 flex items-center justify-center space-x-4 absolute transition-all -translate-y-[290px] z-50 ${
          send
            ? "duration-500 shadow-5xl transition-all translate-y-[calc(100%+5px)]"
            : null
        }`}
      >
        {status !== undefined && status.ok ? (
          <>
            <CiCircleCheck size={40} className="text-green-500" />
            <p className={`text-xl ${roboto.className} `}>{status?.message}</p>
          </>
        ) : (
          <>
            <FaRegCircleXmark size={40} className="text-red-500" />
            <p className={`text-xl ${roboto.className} `}>{status?.message}</p>
          </>
        )}
      </div>

      {
        // ! Here goes the label and input of title CLIENT
      }
      <div className="flex flex-col space-y-4">
        <label htmlFor="title" className="text-3xl font-bold">
          Title
        </label>
        <div>
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
        // ! Here goes the container label and input of Select-Option CLIENT and the mark as done Optional
      }
      <div className="flex flex-row z-40 w-full space-x-4">
        <div className="flex flex-col w-1/2 justify-between items-start gap-y-4">
          <label htmlFor="priority" className="text-2xl font-bold">
            Priority
          </label>
          <Select
            optionsSelect={["High", "Medium", "Low"]}
            setSelect={setSelect}
            select={select}
            height={54}
            width={"100%"}
          />
        </div>
        {
          // ! here goes the mark as done optional
        }
        <div className="flex flex-col w-1/2 items-center justify-between ">
          <label htmlFor="complete" className="text-2xl font-bold ">
            Mark as Done
          </label>
          <span
            className={`w-[52px] h-[52px] bg-[#222222] rounded-xl border-2 border-white/50 ${
              done ? "bg-green-500" : null
            }`}
            onClick={() => setDone((prev) => !prev)}
          >
            {done ? <FaCheck className="w-full h-full p-2" /> : null}
          </span>
        </div>
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
          bgColorTailwind="bg-green-500"
          onlyOne={false}
          onClick={() => handleSendData()}
        />
      </div>
    </>
  );
};

export default AddTracerClientSide;
