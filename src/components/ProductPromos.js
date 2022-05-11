import React, { Component } from 'react';
import { promodata } from '../shared/promodata';
import PromoCard from './PromoCard';
import BrandsCarousel from './BrandsCarousel';
import CategoryCarousel from './CategroryCarousel';


const ProductPromos = () => {

  return(
    <>
      <div className='promos-div'>
        <div className='container'>
        <div className="row py-5">

            {
              promodata.map((val, index) => {
                return(
                <div key={val.id} className="col-12 col-md-4">
                <PromoCard 
                background={val.background}
                subtitle={val.subtitle}
                title={val.title}
                />
                </div>
                )
              })
            }
            
            <BrandsCarousel/>
            <CategoryCarousel/>
        
            </div>
      </div>
    </div> 
     </>
  );
};

export default ProductPromos;