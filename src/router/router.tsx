import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/about";
import Projects from "../pages/projects";

export const router = createBrowserRouter([
   {
      path:"/",
      element:<App/>,
      errorElement:<div>Err</div>,
      children:[
         {
            path:'/',
            element:<Home/>
         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/projects",
            element:<Projects/>
         },
      ]
   }
])
   