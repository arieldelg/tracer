import ClientWrappe from "@/components/ClientWrappe";
import { headers } from "next/headers";

const Profile = async () => {
  const url = headers();
  const urlSplit = url.get("custom-header")?.split("/")[1];
  console.log(urlSplit);
  return (
    <section className="w-full h-auto">
      <ClientWrappe>
        <h1>Aqui va el Perfil de la persona</h1>
      </ClientWrappe>
    </section>
  );
};

export default Profile;
