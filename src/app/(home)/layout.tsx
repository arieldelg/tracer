import Navbar from "@/components/Navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log("hola layout");
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

//[calc(100vh-130px)]

export default Layout;
