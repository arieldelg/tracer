"use server";
import { revalidateTag } from "next/cache";
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required().min(1),
  priority: yup.string().required().min(1),
  text: yup.string().required().min(1),
});

type Props = {
  title: string;
  priority?: string;
  text: string;
};

const addTracerServerAction = async (props: Props) => {
  try {
    const res = await schema.validate(props);
    const response = await fetch(`${process.env.API_URL}/api/addTracer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });
    if (!response.ok) {
      return {
        message: "Error en el response",
        error: true,
        status: 404,
        ok: false,
      };
    }
    const data = await response.json();
    revalidateTag("home");
    return data;
  } catch (error) {
    // ! como manejar el error dependiendo de donde venga?
    return {
      message: "Backend must be disconnected from the grid",
      error: JSON.stringify(error),
      ok: false,
    };
  }
};

export { addTracerServerAction };
