import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SettingsProvider, WeatherProvider } from './providers';
import { Home, Settings } from "./pages";
import { Layout } from './components';

import './index.css'

const HomeRoute = {
  path: '/',
  element: <Home />
}

const SettingsRoute = {
  path: '/settings',
  element: <Settings />
}

const routeList = [{
  element: <Layout />,
  children: [HomeRoute, SettingsRoute]
}]

const router = createBrowserRouter(routeList)
const container = document.getElementById('root')!
const root = createRoot(container)

window.addEventListener("online", () => {
  location.reload()
})

window.addEventListener("offline", () => {
  location.reload()
})

root.render(
  <StrictMode>
    <SettingsProvider>
      <WeatherProvider>
        <RouterProvider router={router} />
      </WeatherProvider>
    </SettingsProvider>
  </StrictMode >
);