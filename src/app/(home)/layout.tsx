import Navbar from "@/components/Navbar/Navbar";

const Settings = ({ children }: { children: React.ReactNode }) => {
  console.log("hola layout");
  return (
    <main>
      <Navbar />
      <div className="w-full h-auto relative px-6 py-4">{children}</div>
    </main>
  );
};

export default Settings;
