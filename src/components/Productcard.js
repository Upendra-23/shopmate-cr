import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./productcard.css";

export const Productcard = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, cartList, removeFromCart } = useCart();

  useEffect(() => {
    console.log("hello");
    const productIsInCart = cartList.find(
      (cartItem) => cartItem.id === product.id
    );
    if (productIsInCart) setIsInCart(true);
    else setIsInCart(false);
  }, [cartList, product.id]);

  return (
    <div className="productCard">
      <img src={product.image} alt={product.name} />
      <p className="name">{product.name}</p>
      <div className="action">
        <p>${product.price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
