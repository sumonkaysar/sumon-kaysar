import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        loader: () => fetch('https://my-portfolio-server-coral.vercel.app/skills'),
        element: <Home />,
      }
    ]
  }
])