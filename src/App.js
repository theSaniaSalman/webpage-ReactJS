import React,{ Component } from 'react';
import './App.css';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const App = () => {

    return (
      <BrowserRouter>
    <div className="App">     
      <Main/>
    </div>
    </BrowserRouter>
  );
    
}


export default App;
