import React from 'react';

import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu;