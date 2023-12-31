import React from 'react';
import {NavLink} from 'react-router-dom';
import logoImage from './logomakeup.png';

function NavBar() {
  return (
    <div className='navBar'>
         <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo" />
          <h4 className='logo-text'>Makeup products</h4>
        </div>
        <div className="NavLinks">
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        </div>
    </div >
  )
}

export default NavBar