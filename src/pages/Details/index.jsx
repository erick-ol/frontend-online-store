import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartIcon, Comments } from '../../components';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      shipping: false,
      quantity: 1,
      availableQuantity: '',
      notAvaliable: false,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const fetchResult = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const results = await fetchResult.json();
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    const foundProduct = cartList.find((p) => p.id === id);
    // results.available_quantity
    this.setState({
      product: results,
      shipping: results.shipping.free_shipping,
      availableQuantity: 5,
      disabled: !!foundProduct,
    });
  }

  checkAvaliable = () => {
    const { quantity, availableQuantity } = this.state;
    if (quantity === availableQuantity) {
      this.setState({ notAvaliable: true });
      return;
    }
    this.setState({ notAvaliable: false });
  }

  handleClickQtd = ({ target: { name } }) => {
    const { quantity: number } = this.state;
    if (name === 'minus') {
      if (number === 1) return;
      this.setState((prevProps) => ({
        quantity: prevProps.quantity - 1,
      }), this.checkAvaliable);
    }

    if (name === 'plus') {
      this.setState((prevProps) => ({
        quantity: prevProps.quantity + 1,
      }), this.checkAvaliable);
    }
  }

  buttonQuantity = () => {
    const { quantity, notAvaliable } = this.state;
    return (
      <article>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          name="minus"
          onClick={ this.handleClickQtd }
        >
          -
        </button>
        <div data-testid="shopping-cart-product-quantity">
          {quantity}
        </div>
        <button
          data-testid="product-increase-quantity"
          name="plus"
          onClick={ this.handleClickQtd }
          type="button"
          disabled={ notAvaliable }
        >
          +
        </button>
      </article>
    );
  }

  handleClickAdd = () => {
    const { product, quantity } = this.state;
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    product.quantity = quantity;
    cartList.push(product);
    localStorage.setItem('cartList', JSON.stringify(cartList));
    this.setState({ disabled: true });
  }

  buttonAdd = () => {
    const { disabled } = this.state;
    return (
      <button
        data-testid="product-detail-add-to-cart"
        onClick={ this.handleClickAdd }
        type="button"
        disabled={ disabled }
      >
        Adicionar ao carrinho
      </button>
    );
  }

  render() {
    const { product: { title }, shipping, availableQuantity } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <CartIcon />
        <h2 data-testid="product-detail-name">
          {title}
        </h2>

        <Link
          to="/cart/checkout"
        >
          <button type="submit" data-testid="checkout-fullname">
            Checkout
          </button>
        </Link>
        { shipping && <p data-testid="free-shipping">FRETE GRÁTIS</p> }

        { shipping && <p data-testid="free-shipping">FRETE GRÁTIS</p> }

        {this.buttonQuantity()}
        {this.buttonAdd()}
        <p>
          Quantidade disponivel:
          { availableQuantity }
        </p>
        <Comments identifier={ id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
