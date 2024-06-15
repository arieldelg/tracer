import { GoDotFill } from "react-icons/go";
import Image from "next/image";

const ContactCard = () => {
  return (
    <section className="flex items-center justify-between space-x-4 border-2 border-white/20 rounded-2xl p-3 shadow-3xl">
      <div className="flex items-center space-x-4">
        <div className=" w-11 h-11 ">
          <Image
            src={
              "https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg?t=st=1718399646~exp=1718403246~hmac=7a6364394ab3c298fdf95a9bee8709c4e29c754c7bbaf072ed1de6d5ed09842e&w=1380"
            }
            alt="ariel"
            width={50}
            height={50}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-xl font-bold">Ariel Del Grande</h1>
      </div>
      <GoDotFill style={{ color: "green" }} size={25} />
    </section>
  );
};

export default ContactCard;
