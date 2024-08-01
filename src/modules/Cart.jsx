import { products } from "../products";
import { CartItem } from "./CartItem";

export const Cart = () => (
  <section className="cart">
    <div className="container cart__container">
      <h2 className="cart__title">Корзина (10)</h2>

      <ul className="cart__items">
      {products.map((item) => (
        <CartItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  </section>
);