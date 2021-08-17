import React from 'react';
import { Link } from 'react-router-dom';
import { CartProduct } from '../../components';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const products = JSON.parse(localStorage.getItem('cartList')) || [];
    products.forEach((product) => {
      this.setState((prevState) => ({
        products: [...prevState.products, product],
      }));
    });
  }

  render() {
    const { products } = this.state;

    if (products.length === 0) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }

    return (
      <div>

        <div>
          <Link to="/checkout">
            <button data-testid="checkout-products" type="button">
              Checkout
            </button>
          </Link>
          {
            products.map((product) => (
              <CartProduct key={ product.title } product={ product } />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Cart;
