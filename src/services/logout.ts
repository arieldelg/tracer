"use server";
import { env } from "@/lib/env";

const logout = async () => {
  await fetch(`${env.baseUrl}/api/logout`);
};

export default logout;
