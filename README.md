The purpose of making this code is to solve a very simple problem in React.js. Rather than declaring all of our routes in the App.js you can declare your routes and link in the same file. So if you want to share the state between the component it will become easy otherwise you have to put all your state in App.js if you want to share it between components

# How to use the code

Just grab the RoutingLibrary1 folder from the src folder. Import Browser component in the index.js and wrap your App component with Browser component. Now go to your App.js file and import Nestedroute and Link components from the RoutingLibrary1 folder. The Browser component which you used to wrap the App component is the hub component which will cause a re render if you click on any Link component in the App.js. Please make sure to add full path in the Link and Nestedroute component for example

`<Link to="/Comp1" />
<Nestedroute link="/Comp1" element = {Comp1} />`

Now if you want to use more routes in Comp1 you should import another Browser component in App.js and wrap your Comp1 component with this Browser component. After this just go to your Comp1 file and import Link and Nestedroute components and declare your routes here. Now if you click on any Link in Comp1 the Browser which you used to wrap Comp1 will cause re render and now this Browser component is the hub for Links in Comp1. Make sure to give full path in Links and Nestedroutes in Comp1 for example

`<Link to="/Comp1/Comp3" />
<Nestedroute link="/Comp1/Comp3" element = {Comp3} />`

You can see that only a specific Browser Component will cause the re render and after clicking on Link component the whole Application will not re render only a part of Application will re render.

Thanks
