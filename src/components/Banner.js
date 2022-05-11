import React, { Component } from 'react';
import { Button } from 'reactstrap';

const Banner = () => {
    return (
        <>
        <div className='banner-div'>
            <div className='banner-child'>
            <h2>Get Strength In A Bottle</h2>
            <p>ENSURE GOLD LIQUID 237ML</p>
            <Button
    color="white" className='order-button'
  >
    ORDER NOW
  </Button>
        </div>
        </div>
        </>
    );
}

export default Banner;