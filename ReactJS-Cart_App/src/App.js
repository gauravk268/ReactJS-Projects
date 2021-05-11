import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          title: "Watch",
          price: 99,
          qty: 1,
          img: "https://images-na.ssl-images-amazon.com/images/I/81noOhQaTnL._UY445_.jpg",
        },
        {
          id: 2,
          title: "Mobile Phone",
          price: 999,
          qty: 10,
          img: "https://images-na.ssl-images-amazon.com/images/I/81lA8XZe2mL._SX679_.jpg",
        },
        {
          id: 3,
          title: "Laptop",
          price: 9999,
          qty: 4,
          img: "https://images-na.ssl-images-amazon.com/images/I/81yaUrHPUoL._SX450_.jpg",
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty == 1) {
      this.handleDeleteItem(products[index].id);
      return;
    }

    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };

  handleDeleteItem = (id) => {
    // console.log(id);
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const {products} = this.state;
    var count = 0;

    products.forEach((item) => {
      count += item.qty;
    });

    return count;
  }

  getCartAmount = () => {
    const { products } = this.state;
    var cost = 0;

    products.forEach((item) => {
      cost += (item.qty * item.price);
    });

    return cost;
  }

  render() {
    const { products } = this.state;

    return (
      <div className="App container">
        <Navbar
          totalCartCount={this.getCartCount()}
        />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteItem={this.handleDeleteItem}
        />
        <button className="btn btn-info">Cart Total: Rs. { this.getCartAmount()} </button>
      </div>
    );
  }
}

export default App;
