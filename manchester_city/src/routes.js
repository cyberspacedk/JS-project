import React from "react";
import Layout from "./Hoc/Layout";
import {Switch , Route} from 'react-router-dom'; 
import Home from './Components/Home/Home';

const Routes = props => {
  return (
    <Layout>
       <Switch>

        <Route exact path="/" component={Home}/>
       </Switch>
    </Layout>
    );
};

export default Routes;
