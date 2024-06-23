import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

// ! route that fetch to the backend endPoint to post the tracer to the database (MongoDB)
const POST = async (request: Request) => {
  const res = await request.json();
  try {
    const response = await fetch(`${process.env.BACKEND_ENDPOINT}/addTracer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });
    if (!response.ok) {
      return NextResponse.json({
        message: "Error en el response",
        error: true,
        status: 404,
      });
    }
    const data = await response.json();
    revalidateTag("home");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Backend must be disconnected from the grid" },
      { status: 500 }
    );
  }
};

export { POST };
