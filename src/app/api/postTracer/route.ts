import { revalidatePath, revalidateTag } from "next/cache";
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
      return NextResponse.json({ message: "Error en el response" });
    }

    const data = await response.json();

    return NextResponse.json(data);
  } finally {
    return NextResponse.json({ finally: "data recived" });
  }
};

export { POST };
