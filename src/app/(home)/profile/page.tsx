import { headers } from "next/headers";
import Image from "next/image";
import { roboto } from "@/app/fonts";

const Profile = async () => {
  const url = headers();
  const urlSplit = url.get("custom-header")?.split("/")[1];
  console.log(urlSplit);
  return (
    <section className="w-full h-auto">
      {
        // ! aqui va la Imagen del Perfil (nota: el componente Image de next.js va a dentro de un div para poderlo munipularlo a tu gusto)
      }
      <div className="w-full h-52 flex items-center justify-center my-4">
        <div className="w-52 h-52">
          <Image
            src={
              "https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg?t=st=1718399646~exp=1718403246~hmac=7a6364394ab3c298fdf95a9bee8709c4e29c754c7bbaf072ed1de6d5ed09842e&w=1380"
            }
            width={200}
            height={200}
            alt="ariel"
            quality={100}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className="py-8 w-full space-y-4">
        <h1 className="text-4xl font-bold text-center">Ariel Del Grande</h1>

        <p className={`text-justify text-lg ${roboto.className}`}>
          Aveces siento que el mundo gira alrededor de mi, no es mi culpa ser el
          mas sabio del mundo, escuchaste pinchi betonto...
        </p>
        <div className="border-t-2 border-white/20 space-y-2">
          <div className="py-4 space-y-2">
            <p className="text-xl font-bold text-white/30">Company:</p>
            <p className="text-2xl font-bold px-4">Nuberti</p>
          </div>
          <div className="space-y-2 m-0">
            <p className="text-xl font-bold text-white/20">Social:</p>
            <ul className="px-4 text-2xl font-bold ">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
