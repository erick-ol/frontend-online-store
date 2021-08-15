import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate() {
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    const { length } = this.state;
    if (cartList.length !== length) {
      this.getProducts();
    }
  }

  getProducts = () => {
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    const qtd = cartList.reduce((acc, curr) => acc + curr.quantity, 0);
    this.setState({ quantity: qtd, length: cartList.length });
  }

  render() {
    const { quantity } = this.state;
    return (
      <article>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <span role="img" aria-label="carrinho">🛒</span>
        </Link>
        <span data-testid="shopping-cart-size">{ quantity }</span>
      </article>
    );
  }
}

export default CartButton;
