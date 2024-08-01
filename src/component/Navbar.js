import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
     <ul>
        <Link to="/"> <li>Home</li></Link>
        <Link to="/About"> <li>about</li></Link>
        <Link to="/Contect"> <li>contect</li></Link>
        </ul>
       
      </nav>
    </div>
  );
}

export default Navbar;


