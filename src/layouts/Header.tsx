import AccountInfo from "../components/AccountInfo";
import Logo from "../components/Logo";
import MainNavbar from "../components/MainNavbar";

const Header = () => {
  return (
    <header className="p-2 flex items-center justify-between bg-secondary-yellow">
      <Logo />
      <MainNavbar />
      <AccountInfo />
    </header>
  );
};

export default Header;
