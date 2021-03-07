import React,{useState} from "react";
import { FaAlignJustify } from "react-icons/fa";
import {Link} from "react-router-dom";
import'./navtop.css'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
       <div className="navtop">
        
        <h1 className="h1n">Contact</h1> <span className="h1n">023456789</span>
    <h1 className="h1n">Mail</h1> <span className="h1n">avinashjawahar@gmail.com</span>
        </div>
        
      <div className="container">
      <div className="navbar__container">
        
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <h1 className="h1p">P<span className="h1">roficient</span></h1>
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li >
               <Link className="navbarlinks" to="/">Home
               </Link>
              </li>
              <li>
              <Link className="navbarlinks"to="/services">Services
               </Link>
              </li>
              <li>
              <Link className="navbarlinks"to="/about">About
               </Link>
              </li>
              <li>
              <Link className="navbarlinks" to="/tax">Tax
               </Link>
              </li>
              <li>
              <Link className="navbarlinks" to="/downloads">Downloads
               </Link>
              </li>
              <li>
              <Link className="navbarlinks" to="/usefulinks">usefulinks
               </Link>
              </li>
              <li>
              <Link className="navbarlinks" to="/homeloan">Homeloans
               </Link>
              </li>
              <li>
              <Link className="navbarlinks"to="/faqs">FAQs
               </Link>
              </li>
              <li>
              <Link className="navbarlinks" to="/contact">Contacts
               </Link>
              </li>
             
            </ul>
          ) : (
            ""
          )}
        
      </div>
      </div> 
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
     
    </nav>
  );
};

export default Nav;
