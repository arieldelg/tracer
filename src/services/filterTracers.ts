"use server";
import { auth } from "@/auth";
import { env } from "@/lib/env";
import { GetTracer } from "@/lib/type";

const filterTracers = async (
  options: string
): Promise<GetTracer[] | string> => {
  const session = await auth();
  console.log(session?.user?.id);
  if (session?.user?.id === undefined) {
    return "logout";
  }
  const response = await fetch(
    `${env.baseUrl}/api/filters/${session?.user?.id}/${options}`
  );
  if (!response.ok) {
    throw Error("error en el response filter tracers");
  }

  const data = await response.json();
  // console.log(data);
  return data;
};

export default filterTracers;
