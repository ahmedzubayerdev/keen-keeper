import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timelinepage/Timelinepage";
import Errorpage from "../pages/errorpage/Errorpage";
import Carddetails from "../pages/carddetails/Carddetails";
import Statspage from "../pages/statspage/Statspage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "timeline",
        Component: Timeline,
      },
      {
        path: "card/:id",
        Component: Carddetails,
      },
      {
        path: "stats",
        Component: Statspage,
      },
    ],
    errorElement: <Errorpage></Errorpage>,
  },
]);
