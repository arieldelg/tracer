import ProductCheckoutCard from "@/components/ProductCheckoutCard";
import { ArrayProps, productsArray } from "@/lib/muckdb";
import { cookies } from "next/headers";

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
  console.log(products);
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
  console.log(viewProducts);
  return (
    <section className="space-y-4">
      <h1>Your CheckOut</h1>
      <div className="space-y-6">
        {viewProducts.map(({ id, products, quantity }) => {
          return (
            <ProductCheckoutCard
              key={id}
              products={products}
              quantity={quantity}
            />
          );
        })}
      </div>
    </section>
  );
};

export default page;
