import ProductCard from "@/components/ProductCard";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { productsArray } from "@/lib/muckdb";

export const metadata: Metadata = {
  title: "Shopping",
  description: "Page to use golbal cookies",
};

const Products = () => {
  const product = cookies();
  const cart = product.get("cart")?.value ?? "{}";
  const object = JSON.parse(cart);
  let total: number = 0;
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = object[key];
      total += element;
    }
  }
  console.log(Object.values(object));
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Products to BUY!</h1>
        <Link
          href={"/cart"}
          className="w-12 h-12 rounded-full border flex justify-center items-center bg-white relative"
        >
          <MdOutlineShoppingCartCheckout size={28} className="text-black" />
        </Link>
        {total !== 0 && (
          <span className="w-[28px] h-[28px] rounded-full absolute top-2 right-2 text-sm font-bold bg-black text-white flex justify-center items-center">
            <p>{total}</p>
          </span>
        )}
      </div>
      <p>En esta pagina usaremos cookis globales</p>
      <div className="grid grid-cols-2 gap-6">
        {productsArray.map((element) => {
          return <ProductCard key={element.id} {...element} />;
        })}
      </div>
    </section>
  );
};

export default Products;
