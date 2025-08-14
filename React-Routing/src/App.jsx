import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import DashboardPage from "./components/DashboardPage";
import Navbar from "./components/NavBar";

//Step1:create Router.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/dashboardPage",
    element: <DashboardPage />,
  },
]);
//Step2:Routes Provides to the RouterProvider.  eg line no 29

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
