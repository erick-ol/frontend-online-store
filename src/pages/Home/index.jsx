import React from 'react';
import { CardProduct, CartIcon, Navbar } from '../../components';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import { Aside,
  Button, Categories, Category, Container, Input, Label,
  List, SearchBar, Section } from './styles';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      search: '',
      categoryId: '',
      renderList: false,
      productAdded: 0,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleAdd = () => {
    this.setState((prevState) => ({
      productAdded: prevState.productAdded + 1,
    }));
  }

  setRadioValueAsState = ({ target: { value } }) => {
    this.setState({ categoryId: value }, () => {
      this.fetchList();
    });
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  fetchList = async () => {
    const { categoryId, search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(categoryId, search);
    this.setState({ products: results, renderList: true });
  }

  renderNavbar = () => {
    const { search } = this.state;
    return (
      <>
        <SearchBar>
          <Label htmlFor="searchBar">
            <Input
              data-testid="query-input"
              id="searchBar"
              value={ search }
              name="search"
              onChange={ this.handleChange }
              placeholder="Digite o termo aqui"
            />
          </Label>
          <Button
            data-testid="query-button"
            type="submit"
            onClick={ this.fetchList }
          >
            Pesquisar
          </Button>
        </SearchBar>
        <CartIcon />
      </>
    );
  }

  renderCategories = () => {
    const { categories } = this.state;
    return (
      <Categories>
        {categories.map(({ id, name }) => (
          <Category key={ id }>
            <label htmlFor={ `input-${id}` }>
              <input
                id={ `input-${id}` }
                type="radio"
                data-testid="category"
                name="categoryId"
                value={ id }
                onClick={ this.setRadioValueAsState }
              />
              {name}
            </label>
          </Category>
        ))}
      </Categories>
    );
  }

  renderProductList = () => {
    const { products, renderList } = this.state;
    if (!renderList) {
      return (
        <section data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </section>
      );
    }

    return (
      <>
        <h3>Lista de Produtos</h3>
        <List>
          {
            products.map((product) => (
              <CardProduct
                onAdded={ this.handleAdd }
                product={ product }
                key={ product.id }
              />
            ))
          }
        </List>
      </>
    );
  }

  render() {
    return (
      <Container>
        <Navbar>
          {this.renderNavbar()}
        </Navbar>
        <Aside>
          {this.renderCategories()}
        </Aside>
        <Section>
          {this.renderProductList()}
        </Section>

      </Container>
    );
  }
}

export default Home;
