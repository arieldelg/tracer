// import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const POST = async (request: Request) => {
  const res = await request.json();
  try {
    const response = await fetch(`http://localhost:3001/api/addTracer`, {
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
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Backend must be disconnected from the grid" },
      { status: 500 }
    );
  }
};

export { POST };
