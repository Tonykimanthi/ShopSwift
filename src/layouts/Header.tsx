import AccountInfo from "../components/AccountInfo";
import Logo from "../components/Logo";
import MainNavbar from "../components/MainNavbar";

const Header = () => {
  return (
    <header className="p-2 flex items-center justify-between bg-slate-200">
      <Logo />
      <MainNavbar />
      <AccountInfo />
    </header>
  );
};

export default Header;
