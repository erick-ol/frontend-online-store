import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  handleClick = () => {
    const { product: { id } } = this.props;
    const localObject = JSON.parse(localStorage.getItem('cartLcist')) || [];
    localObject.push(id);
    localStorage.setItem('cartList', JSON.stringify(localObject));
  }

  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        { product.title }
        <img src={ product.thumbnail } alt="" />
        {product.price}
        <button
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
          type="submit"
        >
          Add
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
