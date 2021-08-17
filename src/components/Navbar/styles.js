import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled
  .nav`align-items: center;
  display: flex;
  grid-column: span 2;
  justify-content: space-around;
  width: 100%;
`;

export const Home = styled(Link)`display: flex;
  height: 100%;
`;

export const Image = styled
  .img`height: auto;
  max-width: 100%;
`;
