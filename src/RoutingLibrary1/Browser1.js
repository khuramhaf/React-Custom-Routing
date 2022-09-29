import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { useMemo } from 'react';



export const ThemeContext1 = createContext('');


function Browser1(props) {
 

    const [valuea, setvaluea] = useState("artb");

  
function popstatefun(e){
setvaluea(e.state)
}

    useEffect(()=>{
     

        window.addEventListener('popstate', popstatefun)

        return () => {
          window.removeEventListener('popstate',popstatefun );
        };
    }, [])

    return (
      <div>
  
  <ThemeContext1.Provider value={[valuea, setvaluea]}>
 {React.cloneElement(props.children)}
  
</ThemeContext1.Provider >
      
      </div>
    );
  }
  
  export default Browser1;
  