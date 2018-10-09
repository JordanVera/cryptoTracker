import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CurrencySingleSwitcher from '../pages/currency/CurrecnySingleSwitcher';
import SignInForm from './auth/signin';

export const ROUTE_HOME = '/';
export const ROUTE_NOT_FOUND = '/not-found';
export const ROUTE_CURRENCY_SINGLE = '/currency/:code';

class RootRoutes extends Component {
  render() {
    return(
    <main>
      <Route uid={this.props.uid} render={(props) => <CurrencySingleSwitcher {...props} /> }/>
    </main>
    )
  }
}



export default RootRoutes;
