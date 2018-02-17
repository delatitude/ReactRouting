import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import AppHomePage from './AppHomePage'
import Users from './Users'
import Products from './Products'

const Dashboard = ({ match }) => (
  <div className="primary-layout">
    <header className="primary-header">
      <h1>Welcome to our app!</h1>
      <nav>
        <NavLink to="/dashboard" exact activeClassName="active">Home</NavLink>
        <br/>
        <NavLink to="/dashboard/users" activeClassName="active">Users</NavLink>
        <br />
        <NavLink to="/dashboard/products" activeClassName="active">Products</NavLink>
      </nav>
    </header>
    <main>
      <br /><br /><br />
      <Switch>
        <Route path={`${match.path}`} exact component={AppHomePage} />
        <Route path={`${match.path}/users`} component={Users} />
        <Route path={`${match.path}/products`} component={Products} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
)

export default Dashboard