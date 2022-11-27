import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { WeatherProvider } from './providers';
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
    <WeatherProvider>
      <RouterProvider router={router} />
    </WeatherProvider>
  </StrictMode >
);