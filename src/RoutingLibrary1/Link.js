import { useContext } from "react";
import { ThemeContext } from "./Browser";
import React from "react";

function Link(props) {

  

  const value = useContext(ThemeContext);
  const [valuea, setvaluea, valueb, setvalueb] = value;

    function myfun(e){
      setvaluea(e.target.id+Math.random());
        window.history.pushState(e.target.id, null, e.target.id)
        console.log(ThemeContext);
        
       
        
        }

    return (
      <>
        
        <button  id = {props.to} onClick={myfun}> {props.children}</button>
     
        
      </>
    );
  }
  
  export default Link;
  