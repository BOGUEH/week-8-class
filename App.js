import logo from './logo.svg';
import './App.css';
import React from "react";
import {  Switch,   Route,  Link} from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
const [state, setState] = useState(0);

  return (
    <div className="App">

      <nav>
         <Link to ="/">Home</Link> 
         <Link to ="/about">About</Link> 
        <Link to ="/contact">Contact</Link>
          
      </nav>
      <button onClick={()=>setState(state +1)}> Click </button>
      {state}
     <h1>Hello World</h1>
     <Switch>
      <Route  path="/">
        <Home />
      </Route>
      <Route  path="/about">
        <About />
      </Route>
      <Route  path="/contact">
        <Contact />
      </Route>
    
     </Switch>
    </div>
  );
}

export default App;
