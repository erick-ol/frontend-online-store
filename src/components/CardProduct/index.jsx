import React from 'react';
import PropTypes from 'prop-types';
import { Article, Avaliable, Buy, Card,
  Details, FreeShipping, Image, Price, Title } from './styles';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  handleClick = () => {
    const { product, onAdded } = this.props;
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    product.quantity = 1;
    cartList.push(product);
    localStorage.setItem('cartList', JSON.stringify(cartList));
    this.setState({ disabled: true });
    onAdded();
  }

  buttonAdd = () => {
    const { disabled } = this.state;
    return (
      <Buy
        data-testid="product-add-to-cart"
        onClick={ this.handleClick }
        type="button"
        disabled={ disabled }
      >
        +
        <span aria-label="Comprar Item" role="img">🛍️</span>
      </Buy>
    );
  }

  render() {
    const { product: { id, title, thumbnail, price, shipping,
      available_quantity: quantity } } = this.props;
    const freeShipping = shipping.free_shipping;
    return (
      <Card data-testid="product">
        <Image thumbnail={ thumbnail } />
        <Title>{ title }</Title>
        <Price>
          {`R$ ${price}`}
        </Price>
        { freeShipping
          && <FreeShipping data-testid="free-shipping">FRETE GRÁTIS</FreeShipping> }
        <Article>
          <Avaliable>
            {`Quantidade ${quantity}`}
          </Avaliable>
          {this.buttonAdd()}
          <Details to={ `/${id}` } data-testid="product-detail-link">
            Ver detalhes
          </Details>
        </Article>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    available_quantity: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    quantity: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  onAdded: PropTypes.func.isRequired,
};

export default ProductCard;
