import ProductCheckoutCard from "@/components/ProductCheckoutCard";
import { ArrayProps, productsArray } from "@/lib/muckdb";
import { cookies } from "next/headers";
import Link from "next/link";

export type productsProps = {
  id?: string;
  products: ArrayProps;
  quantity: number;
};

const page = () => {
  const shoppingCart = cookies();
  const products = JSON.parse(shoppingCart.get("cart")?.value ?? "{}") as {
    [id: string]: number;
  };
  // console.log(products);
  const viewProducts: productsProps[] = [];
  for (const idObject of Object.keys(products)) {
    productsArray.find((element) => {
      if (element.id === Number(idObject)) {
        viewProducts.push({
          id: idObject,
          products: element,
          quantity: products[idObject],
        });
      }
    });
  }
  const totalPriceArray = () => {
    if (viewProducts.length > 0) {
      const totalPriceArray = viewProducts
        .map(({ quantity, products }) => {
          return quantity * products.precio;
        })
        .reduce((a, b) => a + b);
      return totalPriceArray;
    } else {
      return 0;
    }
  };
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1>Your CheckOut</h1>
        {totalPriceArray() > 0 && (
          <p>
            Your Total:{" "}
            <strong className="text-xl">${totalPriceArray()}</strong>
          </p>
        )}
      </div>
      <div className="space-y-6">
        {viewProducts.length === 0 && (
          <Link href={"/products"}>
            <p className="text-xl font-bold underline underline-offset-2 text-center mt-20">
              Start adding a new Purchases
            </p>
          </Link>
        )}
        {viewProducts.map(({ id, products, quantity }) => {
          return (
            <ProductCheckoutCard
              key={id}
              products={products}
              quantity={quantity}
              id={id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;
