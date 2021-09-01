import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CartListPage from './pages/CartListPage';

function CartFeature(props) {
  const match = useRouteMatch();

  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={CartListPage} />
      </Switch>
    </Box>
  );
}

export default CartFeature;
