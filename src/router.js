import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import IndexPage from './routes/IndexPage/IndexPage.js'
import Login from './routes/Login'
import ProductPage from './routes/ProductPage/ProductPage.js'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/products' exact component={ProductPage} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
