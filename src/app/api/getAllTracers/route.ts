import { GetTracer } from "@/lib/type";
import { NextResponse } from "next/server";

//! route that handles all the Api Get Fetch of the tracers based on the owners security key maybe? need to make authentication
const GET = async () => {
  const response = await fetch(`${process.env.API_URL}/api/addTracer`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["home"] },
  });
  const data: GetTracer[] = await response.json();
  const sort = data.sort((a, b) => a.priority.localeCompare(b.priority));

  const high: GetTracer[] = [];
  const medium: GetTracer[] = [];
  const low: GetTracer[] = [];
  sort.forEach((element) => {
    if (element.priority === "High") {
      high.push(element);
    } else if (element.priority === "Medium") {
      medium.push(element);
    } else if (element.priority === "Low") {
      low.push(element);
    }
  });
  const object = {
    high: high,
    medium: medium,
    low: low,
  };
  return NextResponse.json(object);
};

export { GET };
