import React from 'react';
import {NavLink} from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/bodymassindex" > Body Mass Index </NavLink>
      <NavLink to="/weight" > Weight </NavLink>
      <NavLink to="/history" > History </NavLink>
    </nav>
  )
}

export default Navigation
