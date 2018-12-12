import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'

import Dashbord from '../dashbord/dashbord'
import BillingCycles  from '../billingCycle/billingCycle'
import AuthOrApp from './authOrApp';
export default  props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp} > 
            <IndexRoute component={Dashbord}/>
            <Route path='/billingCycles' component={BillingCycles} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)