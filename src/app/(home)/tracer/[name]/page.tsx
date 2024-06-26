import IndividualTracerClientSide from "@/components/IndividualTracerClientSide";
import { GetTracer } from "@/lib/type";
import React from "react";

type Props = {
  params: {
    name: string;
  };
};

// ! server action that i can export to re-use it
export const tracerByIdServerAction = async (
  id: string
): Promise<GetTracer[]> => {
  "use server";
  const response = await fetch("http://localhost:8000/api/tracerById/" + id, {
    cache: "no-cache",
    next: { tags: ["home"] },
  });
  const data = await response.json();
  return data;
};

const Tracer = async ({ params }: Props) => {
  // ! caching the id from url
  const length = params.name.split("-").length;
  const id = params.name.split("-")[length - 1];
  // ! passing id to server action
  const data = await tracerByIdServerAction(id);
  console.log(data);
  return (
    <div className="space-y-4">
      <IndividualTracerClientSide data={data} />
    </div>
  );
};

export default Tracer;
