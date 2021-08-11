import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAdd from '../components/ButtonAdd';
import Form from '../components/Form';
import Coments from '../components/Coments';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const fetchResult = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const results = await fetchResult.json();
    this.setState({
      product: results,
    });
  }

  render() {
    const { product: { title } } = this.state;
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <h2 data-testid="product-detail-name">
          {title}
        </h2>
        <ButtonAdd id={ id } testId="product-detail-add-to-cart">Add</ButtonAdd>
        <Form identifier={ id } />
        <Coments />
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
