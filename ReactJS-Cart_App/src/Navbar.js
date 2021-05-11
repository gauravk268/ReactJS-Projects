import React from "react";

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://image.flaticon.com/icons/png/512/263/263142.png"
        />
        <span style={styles.cartCount}>{props.totalCartCount}</span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 4px",
    width: 30,
    height: 30,
    textAlign: "center",
    position: "absolute",
    right: 4,
    top: -9,
  },
};

export default Navbar;
