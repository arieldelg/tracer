import { NextResponse } from "next/server";

const GET = async () => {
  const response = await fetch("http://localhost:3001/api/addTracer", {
    headers: {
      "Content-Type": "application/json",
    },
    // cache: "no-store",
    next: { tags: ["home"] },
  });
  const data = await response.json();
  // console.log(response.json);
  return NextResponse.json({ data: data });
};

export { GET };
