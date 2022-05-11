import React from "react";
import '../App.css';
import {categories} from '../shared/categories';
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, CardGroup, Button} from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let settings_3 = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,

  responsive: [{
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }]
};

const hStyle = {
  color: '#0258e2'
};

export default function CategoryCarousel() {
  const renderCategs = () => 
   categories.map(num => (
    <div>
      {/* <div key={num.id} className="col-12 col-md-4 brand-card"> */}
      {/* <img src={num.image} alt={num.text}/>
      <h4>{num.text}</h4> */}
      <Card key={num.id} className='brand-card mx-2 rounded'>
      <CardImg height="150" src={num.image} alt={num.text} />
      <CardBody>   
      <CardTitle className="cat-title" tag="h5">
        {num.text}

      </CardTitle>    
      </CardBody>
      </Card>
      </div>
   
    ));

    return (
      <>  
        <div className="container w-100 my-3 categories-div px-4 rounded">
        <h3 style={hStyle} className="mb-4 pl-3 font-weight-bold text-left">PRODUCT CATEGORIES</h3>
          <div className="row product-card">
      
            <Slider
             {...settings_3}
            >
              {renderCategs()}
            </Slider>
            </div>
        </div>
        </>
      );
}

