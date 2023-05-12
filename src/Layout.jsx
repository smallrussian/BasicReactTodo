import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="navlink">
            <Link to="/">Home</Link>
          </li>
          <li className="navlink">
            <Link to="/todo">Todo List</Link>
          </li>
          <li className="navlink">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
