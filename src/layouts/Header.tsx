import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className="p-2 flex items-center justify-between bg-primary-yellow">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
