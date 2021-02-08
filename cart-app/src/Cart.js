import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const {
    products,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteItem,
  } = props;
  return (
    <div className="cart jumbotron">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onDeleteItem={onDeleteItem}
          />
        );
      })}
    </div>
  );
};

export default Cart;
