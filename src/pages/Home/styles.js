import styled from 'styled-components';

export const Container = styled
  .main`background-color: ${({ theme: { colors } }) => colors.background};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 6vh 1fr;
  height: 100vh;
  max-width: 100%;
  width: 100vw;

  @media ( min-width : 600px ) {
    grid-template-columns: 1fr 4fr;
  }
`;

export const Aside = styled
  .aside`display: grid;
  height: 100%;
  overflow: auto;
  width: 100%;
`;

export const SearchBar = styled
  .article`align-items: center;
  display: flex;
  width: 50%;
`;

export const Label = styled
  .label`height: 70%;
  width: 100%;
`;

export const Input = styled
  .input`border: 5px double ${({ theme: { colors } }) => colors.primary};
  border-radius: 25px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.12);
  height: 100%;
  width: 100%;

  ::placeholder {
    text-align: center;
  }
`;

export const Button = styled
  .button`background-color: ${({ theme: { colors } }) => colors.primary};
  border: 0;
  border-radius: 0 10px 10px 0;
  color: white;
  height: 2rem;
`;

export const Categories = styled
  .ul`display: grid;
  gap: 10px;
  grid-auto-rows: 50px;
  grid-template-columns: 1fr;
`;

export const Category = styled
  .li`align-items: center;
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: 15px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  font-size: 0.75rem;
  font-weight: 300;
`;

export const Section = styled
  .section`height: 100%;
  overflow: auto;
  text-align: center;
  width: 100%;
`;

export const List = styled
  .article`display: grid;
  gap: 50px;
  grid-auto-rows: 400px;
  grid-template-columns: 1fr;
  padding: 20px;

  @media ( min-width : 600px ) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ( min-width : 1024px ) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
