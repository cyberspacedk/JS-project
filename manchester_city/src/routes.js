import React from "react";
import {Switch , Route} from 'react-router-dom'; 

import Layout from "./Hoc/Layout";

import Home from './Components/Home/Home';
import Signin from '../src/Components/Signin/Signin';
import Dashboard from '../src/Components/Admin/Dashboard';
import AdminMatches from '../src/Components/Admin/Matches/AdminMatches';
import AddEditMatch from '../src/Components/Admin/Matches/AddEditMatch';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';
import PublicRoute from './Components/AuthRoutes/PublicRoutes';

const Routes = props => { 
  return (
    <Layout>
       <Switch> 
{/* компоненты получают теже свойства о ЮЗЕРЕ   */}
            <PrivateRoute {...props} path="/admin_matches/:id" exact component={AddEditMatch}/>
            <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
            <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
            <PublicRoute {...props} restricted={true} path="/sign_in" exact component={Signin}/>
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
       </Switch>
    </Layout>
    );
};

export default Routes;
