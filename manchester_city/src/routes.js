import React from "react";
import Layout from "./Hoc/Layout";
import {Switch , Route} from 'react-router-dom'; 
import Home from './Components/Home/Home';
import Signin from '../src/Components/Signin/Signin';
import Dashboard from '../src/Components/Admin/Dashboard';
const Routes = props => {
  return (
    <Layout>
       <Switch> 
        <Route path="/sign_in" component={Signin}/>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
       </Switch>
    </Layout>
    );
};

export default Routes;
