import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg'

import {ButtonContainer, NavWrapper} from "./Button";




export default class Navbar extends Component {
    
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" >
              <Link to='/'>
                  <img src={logo} alt="SBay" className="navbar-brand" />
                  
              </Link> 
              <ul className="navbar-nav align-items-centre">
                <li className="nav-item ml-5">
                 <Link to="/" className="nav-link">
                     Products
                 </Link>    
                 </li>
            </ul>
             
              <Link to='/cart' className="ml-auto">
               <ButtonContainer>
                   <span className="mr-2">
                   <i className="material-icons" />
                   </span>
                   <i className="fas fa-cart-plus" />
                   my cart
               </ButtonContainer>   
              </Link>
              
            </NavWrapper>
        );
    }
}
