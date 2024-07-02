"use client";
import { FaRegMinusSquare } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { addCookie, deleteSingleCookie } from "@/services/cookiesFunctions";
import { useRouter } from "next/navigation";

type Props = {
  id?: string;
  quantity: number;
};

const ComponentClientProductCheckoutCard = ({ id, quantity }: Props) => {
  const router = useRouter();
  return (
    <>
      <button
        className="bg-red-500 rounded-lg p-[2px]"
        onClick={() => {
          if (id) {
            deleteSingleCookie(id);
            router.refresh();
          } else {
            alert("id missing");
          }
        }}
      >
        <FaRegMinusSquare size={35} className="text-white" />
      </button>
      <p className="text-3xl font-bold">{quantity}</p>
      <button
        className="bg-green-500 rounded-lg p-[2px]"
        onClick={() => {
          if (id) {
            addCookie(Number(id));
            router.refresh();
          } else {
            alert("falta id");
          }
        }}
      >
        <FaRegPlusSquare size={35} className="text-white" />
      </button>
    </>
  );
};

export default ComponentClientProductCheckoutCard;
