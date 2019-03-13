import React from 'react';
import logo from './getnormal2.png';
import './header.css';

const Header = ({changemode, mode, add}) => {
  return (
 
        <div className="header-wrap">

            <div className={mode ? 'theme-mode darkmode': 'theme-mode lightmode'}  onClick={changemode}/>

            <img className="header-logo" src={logo} alt="logo"/>

            <div className="header-add-button" data-name="add" onClick={add}> + </div>
        
        </div> 
    
  )
}

export default Header;
