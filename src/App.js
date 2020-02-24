import React from 'react';
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' exact component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
