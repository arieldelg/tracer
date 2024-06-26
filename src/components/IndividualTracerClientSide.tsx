"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "./Input_Select/Select";
import { FaCheck } from "react-icons/fa";
import { GetTracer } from "@/lib/type";
import { ChangeEvent, useEffect, useState } from "react";
import { roboto } from "@/app/fonts";

type Props = {
  data: GetTracer[];
};

const IndividualTracerClientSide = ({ data }: Props) => {
  const tracerProps = data[0];
  const [tracer, setTracer] = useState<GetTracer>(data[0]);
  const [title, setTitle] = useState<string>(tracerProps.title);
  const [select, setSelect] = useState<string>(tracerProps.priority);
  const [object, setObject] = useState<{
    color: string;
    bgColor: string;
    shadow: string;
  }>();
  const [disable, setDisable] = useState<boolean>(true);
  const [done, setDone] = useState<boolean>(tracerProps.complete);
  const [textarea, setTextArea] = useState<string>(tracerProps.text);
  const [button, setButton] = useState<{ bgColor: string; name: string }>({
    bgColor: "bg-blue-500",
    name: "Edit",
  });

  const handleFunction = (): void => {
    if (disable === true) {
      console.log("perro");
      setDisable(false);
    }
    if (button.name === "Save") {
      console.log("aqui lo mando a guardar");
    }
  };
  useEffect(() => {
    if (!disable) {
      setTitle(tracer.title);
      setTextArea(tracer.text);
      setButton({
        name: "Save",
        bgColor: "bg-green-500",
      });
      setObject({
        color: "text-black",
        bgColor: "bg-white/50",
        shadow: "shadow-3xl",
      });
    }
  }, [disable, tracer]);
  return (
    <>
      {
        // ! title
      }
      <h1 className={`text-3xl ${roboto.className} text-center `}>
        Detalles del Tracer
      </h1>
      <div className="flex justify-between">
        <div
          className={`flex flex-col items-center text-sm ${roboto.className}`}
        >
          <p>Date Created at:</p>
          <p>{tracer.dateCreated}</p>
        </div>
        <div
          className={`flex flex-col items-center text-sm ${roboto.className}`}
        >
          <p>Date Updated at:</p>
          <p>{tracer.dateUpdated}</p>
        </div>
      </div>
      {
        // ! Button to edit or save to db
      }
      <Button
        onlyOne={true}
        name={button.name}
        colorTailwind={button.bgColor}
        font={roboto.className}
        onClick={() => handleFunction()}
      />
      {
        // ! here goes the title
      }
      <div className="space-y-4">
        <label htmlFor="title" className={`text-3xl ${roboto.className}`}>
          Title
        </label>
        <Input
          id="title"
          name="title"
          value={title}
          setValue={setTitle}
          type="text"
          rounded="rounded-xl"
          border="border"
          disable={disable}
          bgColorTailwind={object?.bgColor}
          fontTailwind="text-3xl"
          colorTailwind={object?.color}
          shadowBoxTailwind={object?.shadow}
        />
      </div>
      {
        // ! here goes the container of select-option and mark as done optional
      }
      <div className="flex flex-row z-40 w-full space-x-4">
        <div className="flex flex-col w-1/2 justify-between items-start gap-y-4">
          <label htmlFor="priority" className={`text-2xl ${roboto.className}`}>
            Priority
          </label>
          <Select
            optionsSelect={["High", "Medium", "Low"]}
            setSelect={setSelect}
            select={select}
            height={54}
            width={"100%"}
            disable={disable}
            colorTailwind={object?.color}
            bgTailwind={object?.bgColor}
            shadowTailwind={object?.shadow}
          />
        </div>
        {
          // ! here goes the mark as done optional
        }
        <div className="flex flex-col w-1/2 items-center justify-between ">
          <label htmlFor="complete" className={`text-2xl ${roboto.className}`}>
            Mark as Done
          </label>
          {disable ? (
            <span
              className={`w-[52px] h-[52px] rounded-xl border-2 border-white/50 bg-gray-400`}
            >
              {done ? (
                <FaCheck className="w-full h-full p-2 text-black/40" />
              ) : null}
            </span>
          ) : (
            <span
              className={`w-[52px] h-[52px] bg-[#222222] rounded-xl border-2 border-white/50 ${
                done ? "bg-green-500" : null
              }`}
              onClick={() => setDone((prev) => !prev)}
            >
              {done ? <FaCheck className="w-full h-full p-2" /> : null}
            </span>
          )}
        </div>
      </div>
      {
        // ! Here goes the label and text of the tracer CLIENT
      }
      <div className="flex flex-col space-y-4">
        <label htmlFor="text" className={`text-3xl ${roboto.className}`}>
          Text
        </label>
        <textarea
          name="text"
          id="text"
          className={`bg-transparent border rounded-lg h-56 p-2 outline-none text-xl ${
            disable
              ? null
              : "shadow-3xl bg-white/50 text-black placeholder:text-black"
          }`}
          placeholder="Write something..."
          value={textarea}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setTextArea(e.target.value)
          }
          disabled={disable}
        />
      </div>
    </>
  );
};

export default IndividualTracerClientSide;
