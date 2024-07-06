import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  console.log("ariel");
  // ! in server component we have to check if is not undefined
  // if (typeof window != "undefined") {
  //   console.log("ariel");
  // window.document.documentElement.scrollTop = 0;
  // window.document.body.scrollTop = 0;
  // }
  return (
    <main className="relative w-screen h-max">
      {
        // ! Navbar component (Client Component)
      }
      <Navbar />
      <div className=" relative px-6 py-4 mt-[140px]">{children}</div>
    </main>
  );
};

export default Layout;
