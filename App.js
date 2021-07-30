import logo from './logo.svg';
import './App.css';
import React from "react";
import {  Switch,   Route,  Link} from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Forms from './components/Forms'


function App() {



  return (
    <div className="App">

      {/* <nav>
         <Link to ="/">Home</Link> 
         <Link to ="/shop"> Shop</Link> 
        <Link to ="/contactPage ">ContactPage </Link>
        <Link to ="/product ">Product </Link>
          
      </nav>
  
     <h1>Hello World</h1>
     <Switch>
      <Route  path="/">
        <Home />
      </Route>
      <Route  path="/shop">
        <Shop  />
      </Route>
      <Route  path="/contactPage ">
        <ContactPage />
      </Route>
      <Route  path="/product ">
        <Product />
      </Route>
  </Switch> */}
    <Forms />
  
    </div>
  );
}

export default App;
