import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      quantity: 1,
      availableQuantity: props.product.available_quantity,
      disabledPlus: false,
    };
  }

  componentDidMount() {
    const { product } = this.props;
    this.setProduct(product);
    this.setQuantity();
  }

  setProduct = (product) => (this.setState({ product }))

  setQuantity = () => {
    const { product: { quantity } } = this.props;
    if (!quantity) {
      this.setState({
        quantity,
      });
    }
  }

  handleClick = ({ target: { name } }) => {
    const { quantity, availableQuantity } = this.state;
    if (name === 'minus') {
      if (quantity === 1) return;
      this.setState((prevProps) => ({
        quantity: prevProps.quantity - 1,
      }));
      if (quantity <= availableQuantity) {
        this.setState({ disabledPlus: false });
      }
    }

    if (name === 'plus') {
      if (quantity === availableQuantity - 1) {
        this.setState({ disabledPlus: true });
      }
      this.setState((prevProps) => ({
        quantity: prevProps.quantity + 1,
      }));
    }
  }

  buttonQuantity = () => {
    const { quantity, disabledPlus } = this.state;

    return (
      <article>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          name="minus"
          onClick={ this.handleClick }
        >
          -
        </button>
        <div data-testid="shopping-cart-product-quantity">
          {quantity}
        </div>
        <button
          data-testid="product-increase-quantity"
          name="plus"
          onClick={ this.handleClick }
          type="button"
          disabled={ disabledPlus }
        >
          +
        </button>
      </article>
    );
  }

  render() {
    const { product } = this.state;
    return (
      <>
        <section data-testid="shopping-cart-product-name">
          <h4>{product.title}</h4>
        </section>
        <article>
          {this.buttonQuantity()}
        </article>
      </>
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    available_quantity: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default ProductCart;
