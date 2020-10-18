import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import PizzaQuantity from '../pages/PizzaSize';
import PizzaBorder from '../pages/PizzaBorder';
import PizzaFilling from '../pages/PizzaFilling';
import Observations from '../pages/Observations';
import Finalization from '../pages/Finalization';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/order/quantity" exact component={PizzaQuantity} />
    <Route path="/order/border" exact component={PizzaBorder} />
    <Route path="/order/filling" exact component={PizzaFilling} />
    <Route path="/order/observations" exact component={Observations} />
    <Route path="/order/finalization" exact component={Finalization} />
  </Switch>
);

export default Routes;
