import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/homepage/Homepage";


export const router = createBrowserRouter([
  {
    path:"/",
    Component: Mainlayout,
    children: [
    {
      index: true,
      Component: Homepage,
    }
    
    ]

  }

])