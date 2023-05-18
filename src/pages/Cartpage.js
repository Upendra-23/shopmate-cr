import { Cartcard } from "../components/Cartcard";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CartContext";

export const Cartpage = () => {
  const { total, cartList } = useCart();
  useTitle(`cart`);

  return (
    <main>
      <section className="cart">
        <h1>
          Card items: {cartList.length}/${total}
        </h1>
        {cartList.map((product) => (
          <Cartcard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
