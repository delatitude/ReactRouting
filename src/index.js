import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AuthorizedRoute from './AuthorizedRoute'
import Login from './Login'
import store from './store'
import Dashboard from './Dashboard'


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div style={styles}>
        <Switch>
          <Route path="/auth" component={Login} />
          <AuthorizedRoute path="/dashboard" component={Dashboard} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById('root'));
