import React from 'react'
// React Router
import { Route, Switch } from 'react-router-dom'

import Chart from '../pages/Chart'
import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/Chart' component={Chart} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/Settings' component={Settings} />
        </Switch>
    )
}

export default Routes