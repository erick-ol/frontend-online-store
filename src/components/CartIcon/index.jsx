import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CartEmoji, CartQuantity, Container } from './styles';

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
      <Container>
        <CartEmoji
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <span role="img" aria-label="carrinho">🛒</span>
          <CartQuantity data-testid="shopping-cart-size">{ quantity }</CartQuantity>
        </CartEmoji>
        <Link to="/checkout">Checkout</Link>
      </Container>
    );
  }
}

export default CartButton;
