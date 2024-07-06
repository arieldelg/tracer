"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Input_Select/Select";
import { FaCheck } from "react-icons/fa";
// import { roboto } from "@/app/fonts";
import { addTracerServerAction } from "@/services/actions";
import { Session } from "@/app/(home)/home/new_tracer/page";

export type InputProps = {
  title: string;
  priority: string;
  complete: boolean;
  text: string;
};

type Props = {
  newWithSelect: string;
  session: Session;
};

const AddTracerClientSide = ({ newWithSelect, session }: Props) => {
  console.log(session.user, "home");
  let priority: string;
  if (newWithSelect !== undefined) {
    priority = newWithSelect;
  } else {
    priority = "";
  }
  const [values, setValues] = useState<InputProps>({
    title: "",
    complete: false,
    priority: priority,
    text: "",
  });
  const [status, setStatus] = useState<{ ok: boolean; message: string }>();
  const [send, setSend] = useState<boolean>();
  // ! need to use this state
  const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let level: number;
    switch (values.priority) {
      case "High":
        level = 1;
        break;
      case "Medium":
        level = 4;
        break;
      case "Low":
        level = 7;
        break;
      default:
        level = 0;
    }
    setSend(true);
    const response = await addTracerServerAction({
      title: values.title,
      priority: values.priority,
      text: values.text,
      complete: values.complete,
      level: level,
      id: session.user.id,
    });
    if (!response.ok) {
      const { message } = response;
      return setStatus({
        ok: response.ok,
        message: message,
      });
    } else {
      setSend(false);
      setValues({
        title: "",
        complete: false,
        priority: "",
        text: "",
      });
      level = 0;
      const { message } = response;
      setStatus({
        ok: true,
        message: message,
      });
    }
  };
  return (
    <>
      {
        // ! here goes the status when posting the data
      }
      {
        // ! form that handles the new tracer
      }
      <form onSubmit={handleSumbit} className="space-y-6">
        {
          // ! Here goes the label and input of title CLIENT
        }
        <div className="flex flex-col space-y-4">
          <label htmlFor="title" className="text-3xl font-bold">
            Title
          </label>
          <div>
            <Input
              setValue={setValues}
              value={values}
              name="title"
              id="title"
              placeholder="titulo"
              border="border"
              rounded="rounded-xl"
              type="text"
              bgColorTailwind="bg-[#222222]"
              shadowBoxTailwind="shadow-3xl"
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
              setSelect={setValues}
              select={values}
              height={54}
              width={"100%"}
              shadowTailwind="shadow-3xl"
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
            value={values.text}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setValues({
                ...values,
                text: e.target.value,
              })
            }
          />
        </div>
        {
          // ! here goes the button to cancel or save (fetch API) the tracer CLIENT
        }
        <div className="flex justify-between space-x-4">
          <Button
            name="Cancel"
            color="red"
            url="back"
            onlyOne={false}
            type="button"
          />
          <Button
            type="submit"
            name="Save"
            bgColorTailwind="bg-green-500"
            onlyOne={false}
            loading={send}
          >
            {send && (
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
        </div>
      </form>
    </>
  );
};

export default AddTracerClientSide;
