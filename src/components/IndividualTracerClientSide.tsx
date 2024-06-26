"use client";
import { roboto } from "@/app/fonts";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { GetTracer } from "@/lib/type";
import { useEffect, useState } from "react";

type Props = {
  data: GetTracer[];
};

const IndividualTracerClientSide = ({ data }: Props) => {
  const tracerProps = data[0];
  const [tracer, setTracer] = useState<GetTracer>(data[0]);
  const [title, setTitle] = useState<string>(tracerProps.title);
  const [disable, setDisable] = useState<boolean>(true);
  const handleFunction = (): void => {
    console.log("perro");
    setDisable(false);
  };
  console.log(disable);
  useEffect(() => {
    if (!disable) {
      setTitle(tracer.title);
    }
  }, [disable, tracer]);
  return (
    <>
      <h1 className={`text-3xl ${roboto.className} text-center`}>
        Detalles del Tracer
      </h1>
      <Button
        onlyOne={true}
        name="Edit"
        colorTailwind="bg-blue-500"
        font={roboto.className}
        onClick={() => handleFunction()}
      />
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
          bgColorTailwind="bg-white/50"
          fontTailwind="text-3xl"
        />
      </div>
    </>
  );
};

export default IndividualTracerClientSide;
