import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled
  .section`background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  padding: 10px;
  position: relative;
`;

export const Title = styled
  .h3`align-items: center;
  align-self: center;
  display: flex;
  font-size: 0.85rem;
  font-weight: 300;
  height: 100%;
  justify-content: center;
  letter-spacing: 0.05rem;
  padding: 2px;
  text-align: left;
`;

export const Image = styled
  .article`background-image: url(${({ thumbnail }) => thumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-bottom: 0.025px solid black;
`;

export const Article = styled
  .article`align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Buy = styled
  .button`background-color: ${({ theme: { colors } }) => colors.buyed};
  border: 0;
  border-radius: 5px;
  bottom: 0;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 5px;
  position: absolute;
  transition: font-size 0.25s ease-in-out , filter 1s ease;
  width: 100%;
  z-index: 2;

  :hover {
    filter: brightness(1.75);
    font-size: 2rem;
  }
`;

export const Details = styled(Link)`align-items: center;
  background-color: ${({ theme: { colors } }) => colors.primary};
  border: 0;
  border-radius: 5px;
  bottom: 2.25rem;
  color: white;
  cursor: pointer;
  display: flex;
  height: 25px;
  justify-content: center;
  padding: 5px;
  position: absolute;
  text-decoration: none;
  transition: padding 0.25s ease-in-out , filter 1s ease;
  width: 100%;
  z-index: 1;

  :hover {
    filter: brightness(1.75);
    padding: 10px;
  }
`;

export const Price = styled
  .span`background-color: ${({ theme: { colors } }) => colors.primary};
  color: white;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 6rem;
`;

export const FreeShipping = styled
  .span`background-color: ${({ theme: { colors } }) => colors.gray};
  bottom: 7rem;
  box-shadow: 0 2px 3px rgba(100, 100, 100, 0.75);
  color: white;
  left: 0;
  padding: 10px;
  position: absolute;
  z-index: 2;
`;

export const Avaliable = styled
  .span`align-items: center;
  background: black;
  border-radius: 5px;
  bottom: 5rem;
  display: flex;
  font-size: 0.6rem;
  font-weight: 300;
  justify-content: center;
  left: 0;
  padding: 10px;
  position: absolute;
  z-index: 1;
`;
