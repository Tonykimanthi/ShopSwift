const Navbar = () => {
  return (
    <nav className="flex items-center">
      <button>
        <img className="w-48" src="images/logo.png" alt="" />
      </button>
      <ul>
        <li className="text-2xl font-medium hover:text-orange-500">
          <a href="#">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
