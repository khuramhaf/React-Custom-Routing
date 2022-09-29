import React from 'react';
import { useContext } from "react";
import { useEffect } from 'react';
import { ThemeContext } from "./Browser";

function Nestedroute(props) {
  const value = useContext(ThemeContext);
  const [valuea, setvaluea, valueb, setvalueb] = value;

var x = window.location.pathname
var y = x.split('/');
var z = y.splice(0,1);
var wildcardcheck = false;
var elementfromprops;


  if (window.location.pathname === props.link){
    elementfromprops = props.element;
    wildcardcheck = true;
  }
else{

  var counter = 0;
while(counter<y.length){
  if('/'+y[counter]===props.link){
    elementfromprops = props.element
    wildcardcheck = true;
   }
  counter++;
}

var array = [];
var counter1 = 0;
while (counter1<y.length-1){
 array.push("/"+y[counter1])
   counter1++;
}

var result;
  result = array.join('');
  if (result===props.link){
  elementfromprops = props.element
  wildcardcheck = true;
  }
   array = [];
  counter = 0;
  while (counter<y.length-2){
   array.push("/"+y[counter])
     counter++;
  }
  result = array.join('');
  if (result===props.link){
  elementfromprops = props.element
  wildcardcheck = true;
  }
}

useEffect(()=>{

  if(wildcardcheck===true){

    setvalueb("ltrb");
  }


})





  





   
    
        return(
         
    
          <div> 
             {elementfromprops}  

             {console.log("i am route")}
             {console.log(props.link)}
        
          </div>
        );
    }

   
    

export default Nestedroute;
