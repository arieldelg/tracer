"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "./Input_Select/Select";
import { FaCheck } from "react-icons/fa";
import { GetTracer } from "@/lib/type";
import { ChangeEvent, FormEvent, useState } from "react";
import { roboto } from "@/app/fonts";
import { updateTracerById } from "@/services/updateTracerById";

type Props = {
  data: GetTracer[];
};

const IndividualTracerClientSide = ({ data }: Props) => {
  // ! states from values to change
  const [values, setValues] = useState<{
    title: string;
    priority: string;
    complete: boolean;
    text: string;
  }>({
    title: data[0].title,
    complete: data[0].complete,
    priority: data[0].priority,
    text: data[0].text,
  });
  // ! state that contains property styles
  const [object, setObject] = useState<{
    name: string;
    color: string | undefined;
    bgColor: string;
    shadow: string | undefined;
    buttonStatus: string;
  }>({
    bgColor: "bg-[#222222]",
    color: undefined,
    name: "Edit",
    shadow: undefined,
    buttonStatus: "bg-blue-500",
  });
  //! states that contain sending fetch states
  const [disable, setDisable] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  //! function to handle form and fetch to server action
  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (object.name == "Edit") {
      setDisable(false);
      setObject({
        shadow: "shadow-3xl",
        color: "text-black",
        bgColor: "bg-white/50",
        name: "Save",
        buttonStatus: "bg-green-500",
      });
    }
    if (object.name === "Save") {
      setLoading(true);
      const response = await updateTracerById({
        title: values.title,
        text: values.text,
        complete: values.complete,
        priority: values.priority,
        id: data[0]._id,
      });
      if (response.modifiedCount === 1) {
        setLoading(false);
        setObject({
          bgColor: "bg-[#222222]",
          color: undefined,
          name: "Edit",
          shadow: undefined,
          buttonStatus: "bg-blue-500",
        });
        setDisable(true);
      } else {
        alert("error en fetch");
      }
    }
    console.log(values);
  };

  return (
    <>
      <form onSubmit={(e) => handleForm(e)} className="space-y-4">
        {
          //! button
        }
        <Button
          onlyOne={true}
          type="submit"
          name={object.name}
          bgColorTailwind={object.buttonStatus}
          font={roboto.className}
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
          //!input
        }
        <div className="space-y-4">
          <label htmlFor="title" className={`text-3xl ${roboto.className}`}>
            Title
          </label>
          <Input
            id="title"
            name="title"
            value={values}
            setValue={setValues}
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
          // !div of select and mark as done
        }
        <div className="flex flex-row z-40 w-full space-x-4">
          <div className="flex flex-col w-1/2 justify-between items-start gap-y-4">
            <label
              htmlFor="priority"
              className={`text-2xl ${roboto.className}`}
            >
              Priority
            </label>
            <Select
              optionsSelect={["High", "Medium", "Low"]}
              setSelect={setValues}
              select={values}
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
            <label
              htmlFor="complete"
              className={`text-2xl ${roboto.className}`}
            >
              Mark as Done
            </label>
            {disable ? (
              <span
                className={`w-[52px] h-[52px] rounded-xl border-2 border-white/50 bg-gray-400`}
              >
                {values.complete ? (
                  <FaCheck className="w-full h-full p-2 text-black/40" />
                ) : null}
              </span>
            ) : (
              <span
                className={`w-[52px] h-[52px] bg-[#222222] rounded-xl border-2 border-white/50 ${
                  values.complete ? "bg-green-500" : null
                }`}
                onClick={() =>
                  setValues({
                    ...values,
                    complete: !values.complete,
                  })
                }
              >
                {values.complete ? (
                  <FaCheck className="w-full h-full p-2" />
                ) : null}
              </span>
            )}
          </div>
        </div>
        {
          // !text area
        }
        <div className="flex flex-col space-y-4">
          <label htmlFor="text" className={`text-3xl ${roboto.className}`}>
            Text
          </label>
          <textarea
            name="text"
            id="text"
            className={`bg-transparent border rounded-lg h-56 p-2 outline-none text-xl ${
              object.bgColor
            } ${
              disable ? null : "shadow-3xl  text-black placeholder:text-black"
            }`}
            placeholder="Write something..."
            value={values.text}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setValues({
                ...values,
                text: e.target.value,
              })
            }
            disabled={disable}
          />
        </div>
      </form>
    </>
  );
};

export default IndividualTracerClientSide;
