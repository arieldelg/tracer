"use server";

import { revalidateTag } from "next/cache";

type Props = {
  id: string;
};

const deleteTracerById = async (props: Props) => {
  revalidateTag("home");
  try {
    const response = await fetch(
      `${process.env.API_URL}/api/tracerById/` + props.id,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      return response;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { deleteTracerById };
