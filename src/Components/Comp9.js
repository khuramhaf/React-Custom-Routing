import { ThemeContext1 } from "../RoutingLibrary1/Browser1"
import {useContext} from 'react'
import {useState} from 'react'

function Comp9(){

    const value = useContext(ThemeContext1);

    const [state,setstate]= value

    function myfun(){

        window.history.pushState(null, null, "/Comp1/Comp3/Comp6")
        setstate(Math.random())
    }
    return(
    
        <div>
            <h1>Comp9</h1>

             <button onClick={myfun}>gotocomp1</button>
        </div>
    )
    
    }
    
    export default Comp9