"use client";
import { IoIosAddCircle } from "react-icons/io";
import Image from "next/image";
import { addCookie, deleteCookie } from "@/services/cookiesFunctions";
import { useRouter } from "next/navigation";
import { ArrayProps } from "@/lib/muckdb";

const ProductCard = (props: ArrayProps) => {
  const router = useRouter();
  return (
    <div className="w-full h-80 border p-2 rounded-xl relative ">
      <div className="w-full h-[50%] flex justify-center mb-2">
        <Image
          src={props.imagen}
          alt={props.name}
          width={300}
          height={300}
          className="object-cover w-ful h-full rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-between w-full h-[50%] pb-2">
        <p className="text-justify text-sm overflow-auto">
          {props.description}
        </p>
        <p>
          <strong>Precio:</strong> ${props.precio} {props.nominacion}
        </p>
        <div className="flex h-8 w-full justify-between gap-2 text-sm">
          <button className="w-1/2 bg-green-500 rounded-md h-full">
            Comprar
          </button>
          <button
            className="w-1/2 bg-red-500 rounded-md h-full"
            onClick={() => {
              deleteCookie(props.id);
              router.refresh();
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
      <div
        className="absolute -top-4 -right-4 bg-[#222222] rounded-full"
        onClick={() => {
          addCookie(props.id);
          router.refresh();
        }}
      >
        <IoIosAddCircle size={40} className=" text-green-500" />
      </div>
    </div>
  );
};

export default ProductCard;
