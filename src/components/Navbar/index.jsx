import React from 'react';
import PropTypes from 'prop-types';
import { Image, Home, Nav } from './styles';
import logo from '../../assets/home.png';

class Navbar extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Nav>
        <Home to="/">
          <Image src={ logo } alt="Pagina principal" />
        </Home>
        {children}
      </Nav>
    );
  }
}

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Navbar;
