import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      comentario: [
        {
          email: '',
          stars: 1,
          comments: '',
        },
      ],
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { target: { name, value } } = e;
    const { identifier } = this.props;
    this.setState({
      id: identifier,
      comentario: [{
        [name]: value,
      }],
    });
  };

  handleForm = () => {
    const comments = JSON.parse(localStorage.getItem('comentarios')) || [];
    comments.push(this.state);
    localStorage.setItem('comentarios', JSON.stringify(comments));
  }

  renderForm = () => (
    <form onSubmit={ this.handleForm }>
      <label htmlFor="inputForm">
        <input
          type="email"
          name="email"
          id="inputForm"
          placeholder="Email"
          onChange={ this.handleChange }
        />
      </label>
      <textarea
        data-testid="product-detail-evaluation"
        name="comments"
        id="areaInput"
        cols="30"
        rows="10"
        placeholder="Mensagem(opcional)"
        onChange={ this.handleChange }
      />
      <input
        type="number"
        name="stars"
        min="0"
        max="5"
        onChange={ this.handleChange }
      />
      <button type="submit">AVALIAR</button>
    </form>
  )

  renderList = () => {
    const { identifier } = this.props;
    const getComments = JSON.parse(localStorage.getItem('comentarios')) || [];
    const comments = getComments.filter((c) => c.id === identifier);
    if (comments.length === 0) return (<div>Sem avaliações disponíveis</div>);
    return (
      <div>
        {comments.map((c, i) => <div key={ i }>{JSON.stringify(c)}</div>)}
      </div>
    );
  }

  render() {
    return (
      <section>
        {this.renderForm()}
        {this.renderList()}
      </section>
    );
  }
}
Form.propTypes = {
  identifier: PropTypes.string.isRequired,
};

export default Form;
