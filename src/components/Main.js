import React, { Component } from 'react';
import TopBar from './TopBar';
import Navigation from './Navigation';
import Searchbar from './Searchbar';
import Banner from './Banner';
import ProductPromos from './ProductPromos';
import { Routes, Route} from 'react-router-dom';



const Main = () => {
    return (
      <>
        <TopBar/>
        <Searchbar />
        <Navigation />
        <Banner />
        <ProductPromos/>           
      </>
    );
  }

export default Main;