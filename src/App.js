import React from 'react';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Cart, Details, Checkout } from './pages';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Reset />
      <BrowserRouter>
        <Switch>
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart" component={ Cart } />
          <Route exact path="/:id" render={ (props) => <Details { ...props } /> } />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
