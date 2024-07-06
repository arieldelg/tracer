import { env } from "@/lib/env";
import { GetTracer } from "@/lib/type";

const filterTracers = async (
  id: string,
  options: string
): Promise<GetTracer[]> => {
  const response = await fetch(`${env.baseUrl}/api/filters/${id}/${options}`);
  if (!response.ok) {
    throw Error("error en el response filter tracers");
  }

  const data = await response.json();
  return data;
};

export default filterTracers;
