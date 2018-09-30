import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import Products from '../pages/Products.js'
import Cart from '../pages/Cart.js'
import Checkout from '../pages/Checkout.js'
import CheckoutSuccess from '../pages/CheckoutSuccess.js'
import NotFound from '../pages/NotFound'

const AppRouter = () => (
  <HashRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/products' component={Products} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/checkout-success' component={CheckoutSuccess} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </HashRouter>
)
export default AppRouter
