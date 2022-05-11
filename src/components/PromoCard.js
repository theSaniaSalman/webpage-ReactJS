import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardGroup, Button} from 'reactstrap';

const PromoCard = (props) => {
    return(
<>
<CardGroup>
<Card style={{backgroundImage: `url(${props.background})`}} className='mx-1 py-4 rounded promo-cardbox'>
    {/* <CardImg height="150px" src={props.background} alt={props.title} /> */}
    <CardBody>
    <CardSubtitle
        className="mb-2 font-weight-500 text-left"
        color='muted'
        tag="h5">
        {props.subtitle}
      </CardSubtitle>
      <CardTitle tag="h3" className='font-weight-bold text-left promocard-title'>
        {props.title}
      </CardTitle>
      <div className='text-left'>
      <Button className='my-3 px-5 text-left home-buttons font-weight-bold' color='primary'>
        SHOP NOW
      </Button>
      </div>
    </CardBody>
  </Card>
  </CardGroup>
</>
    )
};

export default PromoCard;