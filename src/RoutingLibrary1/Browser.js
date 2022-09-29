import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { useMemo } from 'react';



export const ThemeContext = createContext('');


function Browser(props) {
 

    const [valuea, setvaluea] = useState("artb");
    const [valueb, setvalueb] = useState("prtb");

  
function popstatefun(e){
setvaluea(e.state)
setvalueb("prtb");
}

    useEffect(()=>{
     

        window.addEventListener('popstate', popstatefun)

        return () => {
          window.removeEventListener('popstate',popstatefun );
        };
    }, [])

    return (
      <div>
  
  <ThemeContext.Provider value={[valuea, setvaluea, valueb, setvalueb]}>
 {React.cloneElement(props.children)}
  
</ThemeContext.Provider >
      
      </div>
    );
  }
  
  export default Browser;
  