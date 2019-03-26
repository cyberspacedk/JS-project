import React from "react";
import Layout from "./Hoc/Layout";
import {Switch , Route} from 'react-router-dom'; 
import Home from './Components/Home/Home';
import Signin from '../src/Components/Signin/Signin';
import Dashboard from '../src/Components/Admin/Dashboard';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';
import PublicRoute from './Components/AuthRoutes/PublicRoutes';

const Routes = props => { 
  return (
    <Layout>
       <Switch> 
{/* компоненты получают теже свойства о ЮЗЕРЕ   */}
            <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
            <PublicRoute {...props} restricted={true} path="/sign_in" exact component={Signin}/>
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
       </Switch>
    </Layout>
    );
};

export default Routes;
