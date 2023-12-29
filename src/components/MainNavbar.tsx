import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-md:hidden">
      <ul className="flex items-center gap-x-5 text-xl">
        <li className="text-primary-darkblue hover:text-secondary-blue transition-colors">
          <Link to="/ShopSwift">Home</Link>
        </li>
        <li className="text-primary-darkblue hover:text-secondary-blue transition-colors">
          <Link to="/ShopSwift/shop">Shop</Link>
        </li>
        <li className="text-primary-darkblue hover:text-secondary-blue transition-colors">
          <Link to="/ShopSwift/electronics">Electronics</Link>
        </li>
        <li className="text-primary-darkblue hover:text-secondary-blue transition-colors">
          <Link to="/ShopSwift/jewelleries">Jewelery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
