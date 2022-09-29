import React from 'react';
import { useContext } from "react";
import { useEffect } from 'react';
import { ThemeContext } from "./Browser";

function Route(props) {
  const value = useContext(ThemeContext);
  const [valuea, setvaluea, valueb, setvalueb] = value;

var x = window.location.pathname
var wildcardcheck = false;
if (x===props.link){
  var elementfromprops;
  elementfromprops = props.element
  wildcardcheck = true;
}







  





   
    
        return(
         
    
          <div> 
             {elementfromprops}  

             {console.log("i am route")}

          
        
          </div>
        );
    }

   
    

export default Route;
