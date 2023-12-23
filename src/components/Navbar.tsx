import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-md:hidden">
      <ul className="flex items-center gap-x-5 text-xl">
        <li className="text-primary-dark-blue hover:text-secondary-blue transition-colors">
          <Link to="/">Home</Link>
        </li>
        <li className="text-primary-dark-blue hover:text-secondary-blue transition-colors">
          <Link to="/about">About Us</Link>
        </li>
        <li className="text-primary-dark-blue hover:text-secondary-blue transition-colors">
          <Link to="/electronics">Electronics</Link>
        </li>
        <li className="text-primary-dark-blue hover:text-secondary-blue transition-colors">
          <Link to="/jewelery">Jewelery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
