
import Link from './RoutingLibrary1/Link'
import Nestedroute from './RoutingLibrary1/Nestedroute'
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import Browser from './RoutingLibrary1/Browser'
import React, { useState } from 'react';
import { useContext } from "react";

import { ThemeContext } from './RoutingLibrary1/Browser';

function App() {
 
  const [state, setstate] = useState("teststate1")

  function myfunction(){
    setstate('test state2');

  }


  
  return (
    <div>

    <Link oncclick={myfunction} to = "/Comp1">Comp1</Link>
    <Link to = "/Comp2">Comp2</Link>

    
    
    <Nestedroute link = "/Comp1" element = {<Browser><Comp1 state={state} setstate={setstate}></Comp1></Browser>}></Nestedroute>
    <Nestedroute link = "/Comp2" element = {<Browser><Comp2></Comp2></Browser>}></Nestedroute>
    
 {console.log("I am app.js")}
    </div>
  );
}

export default App;
