import { roboto } from "@/config/fonts";
import IndividualTracerClientSide from "@/components/IndividualTracerClientSide";
import { GetTracer } from "@/lib/type";
import React from "react";

type Props = {
  params: {
    name: string;
  };
};

// ! server action that i can export to re-use it

const Tracer = async ({ params }: Props) => {
  // ! caching the id from url
  const length = params.name.split("-").length;
  const id = params.name.split("-")[length - 1];
  // ! passing id to server action

  const response = await fetch(`${process.env.API_URL}/api/tracerById/` + id, {
    next: { tags: ["home"] },
  });

  const data: GetTracer[] = await response.json();

  // ! use and drop Server Action
  return (
    <div className="space-y-4">
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

      <IndividualTracerClientSide data={data} />
    </div>
  );
};

export default Tracer;
