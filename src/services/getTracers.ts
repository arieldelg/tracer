"use server";

import { Tracer } from "@/lib/type";

const getTracers = async (): Promise<Tracer[]> => {
  // ! call the url env
  const apiUrl = process.env.API_URL;
  // !making the fetch
  const response = await fetch(`${apiUrl}/api/addTracer`, {
    next: { tags: ["home"] },
  });
  const data = response.json();
  return data;
};

export { getTracers };
