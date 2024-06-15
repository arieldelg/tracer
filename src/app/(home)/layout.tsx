import Navbar from "@/components/Navbar";

const Settings = ({ children }: { children: React.ReactNode }) => {
  console.log("hola layout");
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Settings;
