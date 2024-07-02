import { FaRegMinusSquare } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import Image from "next/image";
import { ArrayProps } from "@/lib/muckdb";

export type PropsProductCheckoutCard = {
  id?: string;
  products: ArrayProps;
  quantity: number;
};

const ProductCheckoutCard = ({
  products,
  quantity,
}: PropsProductCheckoutCard) => {
  const precio = quantity * products.precio;
  return (
    <div className="w-full h-28 border rounded-lg flex items-center justify-between p-2">
      {
        // ! 1
      }
      <div className="w-2/5 h-full">
        <Image
          src={products.imagen}
          alt={products.name}
          width={200}
          height={200}
          className="w-4/5 h-full object-cover rounded-md"
        />
      </div>
      {
        // ! 2
      }
      <div className="flex flex-col items-center space-y-2">
        <p className="capitalize text-base">{products.name}</p>
        <p className="text-center text-base">${precio}</p>
      </div>
      {
        // !3
      }
      <div className="w-2/5 h-full flex items-center justify-between px-2">
        <button className="bg-red-500 rounded-lg p-[2px]" onClick={}>
          <FaRegMinusSquare size={35} className="text-white" />
        </button>
        <p className="text-3xl font-bold">{quantity}</p>
        <button className="bg-green-500 rounded-lg p-[2px]">
          <FaRegPlusSquare size={35} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProductCheckoutCard;
