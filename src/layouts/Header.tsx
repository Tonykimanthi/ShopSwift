import AccountInfo from "../components/AccountInfo";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className="p-2 flex items-center justify-between bg-primary-yellow">
      <Logo />
      <Navbar />
      <AccountInfo />
    </header>
  );
};

export default Header;
