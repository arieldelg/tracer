"use server";

import { revalidateTag } from "next/cache";

type Props = {
  title: string;
  priority?: string;
  text: string;
  url: string;
};

const addTracerServerAction = async (props: Props) => {
  const object = {
    title: props.title,
    priority: props.priority,
    text: props.text,
  };
  const response = await fetch(`${props.url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  // const data = await response.json();
  console.log(response.statusText);
  if (!response.ok) {
    return { message: "Send Error", status: 404, ok: false };
  }
  revalidateTag("home");
  return { message: "Data Sended", status: 200, ok: true };
};

export { addTracerServerAction };
