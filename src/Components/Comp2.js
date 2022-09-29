import Link from '../RoutingLibrary1/Link'
import Nestedroute from '../RoutingLibrary1/Nestedroute';
import Comp7 from './Comp7';
import Comp8 from './Comp8';


function Comp2(){

return(
<div>

    <h1>Comp2</h1>

    <div>
<Link to="/Comp2/Comp7">Comp7</Link>
<Link to="/Comp2/Comp8">Comp8</Link>


<Nestedroute link = "/Comp2/Comp7" element={<Comp7/>}></Nestedroute>
<Nestedroute link = "/Comp2/Comp8" element={<Comp8/>}></Nestedroute>


    </div>
</div>


);



}


export default Comp2