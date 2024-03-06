import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Flowbite } from 'flowbite-react';

import { ErrorPage } from './pages/ErrorPage'
import About from './pages/About';
import { Panel } from './pages/Panel';
import Redirect from './components/redirect';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:url",
    element: <Redirect />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/manage",
    element: <Panel />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode >
    <>
      <Flowbite >
        <RouterProvider router={router} />
      </Flowbite>
    </>
  </React.StrictMode>,
)
