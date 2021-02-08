import React from "react";

const CartItem = (props) => {
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteItem,
  } = props;

  const { price, title, qty, img } = product;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={img} />
      </div>

      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs. {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          <img
            alt="increase"
            className="actions-icons"
            src="https://image.flaticon.com/icons/png/512/104/104618.png"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="actions-icons"
            src="https://icons-for-free.com/iconfiles/png/512/minus+icon-1320185727443878037.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="actions-icons"
            src="https://www.flaticon.com/svg/static/icons/svg/2214/2214063.svg"
            onClick={() => {
              onDeleteItem(product.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
  },
};

export default CartItem;
