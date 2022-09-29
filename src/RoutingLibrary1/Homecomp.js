import React from 'react';
import { useEffect } from 'react';
import { ThemeContext } from "./Browser";

function Homecomp(props) {
  const value = React.useContext(ThemeContext);
  const [valuea, setvaluea, valueb, setvalueb] = value;



var elementfromprops;
var wildcardcheck = false;

if(window.location.pathname === '/'){

  elementfromprops = props.element;
  wildcardcheck = true;
}

useEffect(()=>{

  if(wildcardcheck===true){

    setvalueb("ltrb");
  }


})




   
    
        return(
         
    
          <div> 
             {elementfromprops}  
        
          </div>
        );
    }

   
    

export default Homecomp;
