// import Navbar from "@/components/Navbar";

import { db } from "@/lib/db";

export default async function Home() {
  await db.set("hello", "ariel");
  return (
    <main className=" w-screen">
      {
        //! here goes the Navbar
      }

      {
        // ! here goes the tracer levels
      }
    </main>
  );
}
