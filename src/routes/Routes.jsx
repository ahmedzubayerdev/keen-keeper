import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timelinepage/Timelinepage"
import Stats from "../pages/statepage/Statepage"
import Errorpage from "../pages/errorpage/Errorpage";


export const router = createBrowserRouter([
  {
    path:"/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path:"/timeline",
        Component: Timeline,
      },
      {
        path:"/stats",
        Component: Stats,
      }
    ],
    errorElement: <Errorpage></Errorpage>,

  }

])