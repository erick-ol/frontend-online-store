import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled
  .section`align-items: center;
  background-color: ${({ theme: { colors } }) => colors.text};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 2.5px 50px;
  width: 25%;
`;

export const CartEmoji = styled(Link)`align-items: center;
  display: flex;
  font-size: 1.5rem;
  height: 30px;
  justify-content: center;
  position: relative;
  text-decoration: none;
  width: 100px;
`;

export const CartQuantity = styled
  .span`bottom: 0;
  color: gold;
  position: absolute;
  right: 1rem;
  top: 0;
`;
