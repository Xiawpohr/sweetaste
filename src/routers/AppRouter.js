import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import Products from '../pages/Products.js'
import Cart from '../pages/Cart.js'
import Checkout from '../pages/Checkout.js'
import CheckoutSuccess from '../pages/CheckoutSuccess.js'
import NotFound from '../pages/NotFound'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login} />
      <Route path='/products' component={Products} />
      <Route path='/cart' component={Cart} />
      <Route path='/checkout' component={Checkout} />
      <Route path='/checkout-success' component={CheckoutSuccess} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default AppRouter
