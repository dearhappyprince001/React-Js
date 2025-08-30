//Routing determines that what content or pages to display when a user visits a specific URL or path in a web application.
//command to install react-router-dom is...
// --->  npm install react-router-dom
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import react-router-dom and RouterProvider.
import Home from "./components/Home";
import About from "./components/About";
import DashboardPage from "./components/DashboardPage";
import NavBar from "./components/Navbar";

//Step1:create Router.
//Each route is defined by an object with a path and an element to render when that path is accessed.
const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />,
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  }, //this is 1st route object

  {
    path: "/about",
    // element: <About />,
    element: (
      <div>
        <NavBar />
        <About />
      </div>
    ),
  }, //this is 2nd route object

  {
    path: "/dashboardPage",
    // element: <DashboardPage />,
    element: (
      <div>
        <NavBar />
        <DashboardPage />
      </div>
    ),
  }, //this is 3rd route object
]);

function App() {
  //Step2:Routes Provides to the RouterProvider.
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
