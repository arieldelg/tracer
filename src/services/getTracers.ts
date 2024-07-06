"use server";

import { GetTracer } from "@/lib/type";

const getTracers = async (id: string | boolean): Promise<GetTracer[]> => {
  if (!id) {
    throw Error("no se paso id");
  }
  // ! call the url env
  const apiUrl = process.env.API_URL;
  // !making the fetch
  const response = await fetch(`${apiUrl}/api/addTracer/${id}`, {
    next: { tags: ["home"] },
  });
  const data = response.json();
  return data;
};

export { getTracers };
