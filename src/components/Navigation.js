import React, {Component} from 'react';
import { Nav, Navbar, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';


class Navigation extends Component{
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
       <Navbar className="nav-color" expand="md">
       <div className="container w-100 ms-auto justify-content-center">
       <NavbarToggler onClick={this.toggleNav} className='navbar-dark'/>
       <Collapse isOpen={this.state.isNavOpen} navbar>
       <Nav navbar>
        <NavItem>
          <NavLink className='nav-link text-sm' to="#">MEDICINES</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">PERSONAL CARE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">BABY CARE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">LIFETSYLE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">ORGANIC</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">HEALTHCARE</NavLink>
        </NavItem>
      </Nav>

      <Nav className="ml-auto">
        <NavItem>
          <NavLink to="tel:1-7438-8484"> 
           <span className="text-white">CALL US FREE: </span>
           <span className='call-num text-dark ml-2 px-2'>1-7438-8484</span>
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
  
  export default Navigation;