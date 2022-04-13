import React from 'react'
// React Router
import { Route, Switch } from 'react-router-dom'

import Chart from '../pages/Chart'
import Dashboard from '../pages/Dashboard'
import Email from '../pages/Email'
import Form from '../pages/Form'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/Chart' component={Chart} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/Email' component={Email} />
            <Route path='/Form' component={Form} />
            <Route path='/Profile' component={Profile} />
            <Route path='/Settings' component={Settings} />
        </Switch>
    )
}

export default Routes