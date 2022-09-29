import Link from '../RoutingLibrary1/Link'
import Nestedroute from '../RoutingLibrary1/Nestedroute';
import Comp3 from './Comp3';
import Comp4 from './Comp4';
import Browser from '../RoutingLibrary1/Browser'


function Comp1(props){

    function myfun(e){

        props.setstate(e.target.id);
    }

return(
<div>

    <h1>Comp1</h1>
    <h1>{props.state}</h1>

    <button id="teststate3" onClick={myfun}>change state</button>

    <div>
<Link to="/Comp1/Comp3">Comp3</Link>
<Link to="/Comp1/Comp4">Comp4</Link>


<Nestedroute link = "/Comp1/Comp3" element={<Browser><Comp3></Comp3></Browser>}></Nestedroute>
<Nestedroute link = "/Comp1/Comp4" element={<Comp4></Comp4>}></Nestedroute>




    </div>
</div>


);



}


export default Comp1