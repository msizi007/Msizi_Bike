import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
      <footer>This is my footer &copy; 2025</footer>
    </>
  );
}
