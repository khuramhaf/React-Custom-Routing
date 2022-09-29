import Link from "../RoutingLibrary1/Link"
import Nestedroute from "../RoutingLibrary1/Nestedroute"
import Comp5 from "./Comp5"
import Comp6 from './Comp6';
import Browser from "../RoutingLibrary1/Browser";

function Comp3(){


    return(
    
        <div>
            <h1>Comp3</h1>

            <div>
                <Link to = "/Comp1/Comp3/Comp5">Comp5</Link>
                <Link to = "/Comp1/Comp3/Comp6">Comp6</Link>

                <Nestedroute link="/Comp1/Comp3/Comp5" element={<Comp5></Comp5>}></Nestedroute>
                <Nestedroute link="/Comp1/Comp3/Comp6" element={<Browser><Comp6></Comp6></Browser>}></Nestedroute>
            </div>
        </div>
    )
    
    }
    
    export default Comp3