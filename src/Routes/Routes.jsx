import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Login from "../pages/Login";
import ProjectDetails from "../pages/ProjectDetails";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/projects/:id',
        element: <ProjectDetails />,
      },
      {
        path: '/sk/login',
        element: <Login />,
      },
      {
        path: '/sk/dashboard',
        element: <Dashboard />,
      }
    ]
  },
])