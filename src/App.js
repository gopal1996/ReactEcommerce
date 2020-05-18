import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { Route, Switch } from 'react-router-dom'
import { auth } from './firebase/firebase.utils'


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }

  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
