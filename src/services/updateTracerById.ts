"use server";

// import { revalidateTag } from "next/cache";

import { revalidateTag } from "next/cache";

type Props = {
  title: string;
  text: string;
  complete: boolean;
  priority: string;
  id: string;
};

const updateTracerById = async (props: Props) => {
  const object = {
    title: props.title,
    text: props.text,
    complete: props.complete,
    priority: props.priority,
  };
  try {
    const response = await fetch(
      `${process.env.API_URL}/api/tracerById/` + props.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      }
    );
    if (!response.ok) {
      return "error en el response";
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  } finally {
    revalidateTag("home");
  }
};

export { updateTracerById };
