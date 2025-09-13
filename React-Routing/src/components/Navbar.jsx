import { Link } from "react-router-dom"; //import Link from react-router-dom.

//In react we can not use anchor tag <a> for navigation because it causes a full page reload which is not desirable in single-page applications (SPAs) like those built with React. Instead, we use the <Link> component from the react-router-dom library to handle navigation without reloading the full page it will only update the parts of the page that need to change.
//Attribute "to" is used instead of "href" in Link component.
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboardPage">DashboardPage</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
