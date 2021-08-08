import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Home from '../Home';
import Login from '../Login';

export interface Props {}

const Router: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
