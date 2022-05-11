import React from "react";
import '../App.css';
import {brands} from '../shared/brands';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


let settings_3 = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 6,
  slidesToScroll: 1,

  responsive: [{
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }]
};
export default function BrandsCarousel() {
  const renderSlides = () => 
    //brands.map(brandimage => (
        
      //  <div>
        //    <img src={brandimage.image} alt="BigCo Inc. logo"/>
        //</div>
   // ))
   brands.map(num => (
    <div>
      <div key={num.id} className="col-2 col-md-4 py-3 roundedbrand-card">
      <img height="100px" width="100px" src={num.image} alt="BigCo Inc. logo"/>
      </div>
    </div>
    ));
    
    return (
      <>
      
        <div className="container w-100 my-5">
        <h3 className="mb-4 font-weight-bold">TOP BRANDS</h3>
          <div className="row product-card">
         
            <Slider
             {...settings_3}
            >
              {renderSlides()}
            </Slider>
            
        </div>
        </div>
        </>
      );
}

