import React, {Component} from 'react';
import { Nav, Navbar, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import {MDBIcon} from 'mdbreact';

const pStyle = {
  backgroundColor: 'rgb(188, 226, 231)',
  border:"none",
 };
const linkStyle = {
  color:"#ffffff"
};

class TopBar extends Component{
  constructor(props){
    super(props);
    this.state = {
        isNavOpen:false,
       
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav(){
    this.setState(
        {isNavOpen:!this.state.isNavOpen}
    )
    }
  
    render(){
    return (
      
      <>
       <Navbar className="nav-color" style={pStyle} expand="md">
       <div className="container ms-auto justify-content-center">
       <NavbarToggler onClick={this.toggleNav} className='navbar-dark'/>
       <Collapse isOpen={this.state.isNavOpen} navbar>
       <Nav navbar>
        <NavItem>
          <NavLink style={linkStyle} to="#">Help</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">
          <MDBIcon far icon="heart" />Wishlist
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">Contact Us</NavLink>
        </NavItem>
     </Nav>
{/*        
        <Nav pullRight>
        <NavItem className="pull-right">
        
          <NavLink to="#"> 
          Login / Sign Up
           </NavLink>
        </NavItem>
      </Nav> */}
      <Nav className="ml-auto">
        <NavItem>
          <NavLink to="tel:1-7438-8484"> 
           <span>Login / Signup</span>
          
          </NavLink>
        </NavItem>
      </Nav>
      </Collapse>
      </div>
      </Navbar>
    </>  
     
    )
  }
}
  
  export default TopBar;