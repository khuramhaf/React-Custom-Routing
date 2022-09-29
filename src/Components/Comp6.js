import Link from "../RoutingLibrary1/Link"
import Nestedroute from "../RoutingLibrary1/Nestedroute"
import Comp9 from "./Comp9"


function Comp6(){


    return(
    
        <div>
            <h1>Comp6</h1>

            <div>
              <Link to ="/Comp1/Comp3/Comp6/Comp9">Comp9</Link>

              <Nestedroute link="/Comp1/Comp3/Comp6/Comp9" element={<Comp9/>}></Nestedroute>
            </div>
        </div>
    )
    
    }
    
    export default Comp6