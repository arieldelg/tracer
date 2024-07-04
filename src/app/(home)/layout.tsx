import Navbar from "@/components/Navbar/Navbar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <main className="relative">
      {
        // ! Navbar component (Client Component)
      }
      <Navbar />
      <div className="w-full h-auto relative px-6 py-4">{children}</div>
    </main>
  );
};

export default Layout;
