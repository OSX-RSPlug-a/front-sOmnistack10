import React from 'react';
import { Switch, Route } from 'react-router-dom';

import InitPg from './../pages/init-pg/index';


export default function Routes() {
  return (
      <Switch>
        <Route path="/" component={InitPg} />
      </Switch>
  )
}