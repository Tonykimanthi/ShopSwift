import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-x-4 text-xl">
        <li className="font-medium text-primary-dark-blue hover:text-primary-blue transition-colors">
          <Link to="/">Home</Link>
        </li>
        <li className="font-medium text-primary-dark-blue hover:text-primary-blue transition-colors">
          <Link to="/about">About Us</Link>
        </li>
        <li className="font-medium text-primary-dark-blue hover:text-primary-blue transition-colors">
          <Link to="/electronics">Electronics</Link>
        </li>
        <li className="font-medium text-primary-dark-blue hover:text-primary-blue transition-colors">
          <Link to="/jewelery">Jewelery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
