"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "./Input_Select/Select";
import { FaCheck } from "react-icons/fa";
import { GetTracer } from "@/lib/type";
import { ChangeEvent, useEffect, useState } from "react";
import { roboto } from "@/app/fonts";
import { updateTracerById } from "@/services/updateTracerById";

type Props = {
  data: GetTracer[];
};

const IndividualTracerClientSide = ({ data }: Props) => {
  console.log(data);
  const tracerProps = data[0];
  const [title, setTitle] = useState<string>(data[0].title);
  const [select, setSelect] = useState<string>(tracerProps.priority);
  const [object, setObject] = useState<{
    color: string;
    bgColor: string;
    shadow: string;
  }>();
  const [disable, setDisable] = useState<boolean>(true);
  const [done, setDone] = useState<boolean>(tracerProps.complete);
  const [textarea, setTextArea] = useState<string>(data[0].text);
  const [loading, setLoading] = useState<boolean>(false);
  const [button, setButton] = useState<{ bgColor: string; name: string }>({
    bgColor: "bg-blue-500",
    name: "Edit",
  });

  const handleFunction = async () => {
    if (disable === true) {
      console.log("perro");
      setDisable(false);
    }
    if (button.name === "Save") {
      setLoading(true);
      const response1 = await updateTracerById({
        title: title,
        text: textarea,
        complete: done,
        priority: select,
        id: tracerProps._id,
      });

      if (response1.modifiedCount === 1) {
        setLoading(false);
        setObject({
          color: "",
          bgColor: "",
          shadow: "",
        });
        setButton({
          name: "Edit",
          bgColor: "bg-blue-500",
        });
        setDisable(true);
      }
    }
  };

  useEffect(() => {
    if (!disable) {
      setTitle(data[0].title);
      setTextArea(data[0].text);
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
    console.log("me tengo que ejecutar una vez");
    // return () => {};
  }, [disable, data]);
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
          <p>{data[0].dateCreated}</p>
        </div>
        <div
          className={`flex flex-col items-center text-sm ${roboto.className}`}
        >
          <p>Date Updated at:</p>
          <p>{data[0].dateUpdated}</p>
        </div>
      </div>
      {
        // ! Button to edit or save to db
      }
      <Button
        onlyOne={true}
        name={button.name}
        bgColorTailwind={button.bgColor}
        font={roboto.className}
        onClick={() => handleFunction()}
        loading={loading}
      >
        {loading && (
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-40 h-16 animate-spin"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              r="35"
              strokeWidth="15"
              stroke="#FFFFFF"
              strokeDasharray="110 1400"
              strokeLinecap="round"
            />
          </svg>
        )}
      </Button>
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
