import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ShowProvider } from './providers';
import { Home } from "./pages";
import { Layout } from './components';

import './index.css'

const HomeRoute = {
  path: '/',
  element: <Home />
}

const routeList = [{
  element: <Layout />,
  children: [HomeRoute]
}]

const router = createBrowserRouter(routeList)
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <StrictMode>
    <ShowProvider>
      <RouterProvider router={router} />
    </ShowProvider>
  </StrictMode >
);