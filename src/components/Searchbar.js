import React from "react";
import { MDBCol, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav} from "mdbreact";
import {Button} from 'reactstrap';


const SearchPage = () => {
  return (
    <>
       <MDBNavbar className="text-white m-0 p-0" expand="md">
         <MDBCol md="2">
        <MDBNavbarBrand>
          <img src="/assets/company-logo.jpg" height="100" width="120" alt="Company logo" />
        </MDBNavbarBrand>
        </MDBCol>
        <MDBCol md="6">
        <MDBNavbarNav>
        <div className="md-form mx-auto m-0 w-100">
        <div className="input-group md-form form-lg form-1 pl-2">    
        <input className="form-control my-0 py-1 outline " type="text" placeholder="Search" aria-label="Search" />    
        <div className="input-group-prepend">
          <span className="input-group-text blue lighten-3" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>  
      </div>
      </div> 
      </MDBNavbarNav>
      </MDBCol>
      <MDBCol md="4">
      <Button color="primary">
      <span> Upload File</span>
      <MDBIcon icon="file-upload" className="pl-2" />         
      </Button>
      {/* <div className="cart-div"> */}
      <Button outline color="dark" className="cart-btn p-0">
        <div className="cart-box">
      <MDBIcon icon="shopping-cart" />
      </div>
      <span  className="px-3" color="primary" >My Cart: 0 item</span>
      </Button>
      {/* </div> */}
      </MDBCol>
      </MDBNavbar>

     
  </>
    
  );
}

export default SearchPage;