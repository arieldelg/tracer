import { ArrayProps, productsArray } from "@/lib/muckdb";
import { cookies } from "next/headers";

const page = () => {
  const shoppingCart = cookies();
  const products = JSON.parse(shoppingCart.get("cart")?.value ?? "{}");
  console.log(products);
  const viewProducts: { id: string; products: ArrayProps }[] = [];
  for (const idObject of Object.keys(products)) {
    productsArray.find((element) => {
      if (element.id === Number(idObject)) {
        viewProducts.push({ id: idObject, products: element });
      }
    });
  }
  console.log(viewProducts);
  return (
    <section>
      {viewProducts.map(({ id, products }) => {
        return (
          <div key={id}>
            <h1>{products.name}</h1>
            <p>{products.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default page;
