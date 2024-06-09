import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import { server } from "../../links";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch(`${server}/skills/mern`),
        element: <Home />,
      },
      {
        path: '/skills',
        loader: () => fetch(`${server}/skills`),
        element: <Skills />,
      },
      {
        path: '/projects',
        // loader: () => fetch(`${server}/skills`),
        element: <Projects />,
      }
    ]
  }
])