import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Product from './components/Product';
import data from './data';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
   
function App() {
  return (
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="/">amazona</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
      <BrowserRouter>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      </BrowserRouter>
    </main>
    <footer className="row center">All right reserved</footer>
  </div>

  );
}

export default App;
