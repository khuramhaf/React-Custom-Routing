import React from 'react';
import { ThemeContext } from "./Browser";

function Wildcard(props) {
  const value = React.useContext(ThemeContext);
  const [valuea, setvaluea, valueb, setvalueb] = value;

    if (valueb === "prtb")
    
        return(
         
    
          <div> 
             {props.element}  
        
          </div>
        );
      }
    

export default Wildcard;
