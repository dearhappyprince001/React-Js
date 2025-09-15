import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Step1:Create a Router.
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  }, //1st route object.

  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <AboutUs />
      </div>
    ),
  }, //2nd route object.

  {
    path: "/contact",
    element: (
      <div>
        <NavBar />
        <Contact />
      </div>
    ),
  }, //3rd route object.

  {
    path: "/dashboard",
    element: (
      <div>
        <NavBar />
        <Dashboard />
      </div>
    ),
  }, //4th route object.
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
