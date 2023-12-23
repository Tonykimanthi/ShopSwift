import { Link } from "react-router-dom";
import { useContext } from "react";
import { navContext } from "../App";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";


interface NavcontextProps {
  navIsActive: boolean;
  setNavIsActive: (navIsActive: boolean) => void;
}

const AccountInfo = () => {
  const { navIsActive, setNavIsActive } = useContext(navContext) as NavcontextProps;

  return (
    <div className="mr-5 flex items-center gap-x-5">
      <button className="mr-2 max-md:mr-0 text-primary-blue text-lg py-1 rounded hover:text-secondary-blue transition">
        <Link to="/login">Login</Link>
      </button>

      {/* Favorites */}
      <button className="max-md:hidden">
        <MdFavoriteBorder className="w-6 h-6 fill-primary-dark-blue"/>
      </button>

      <button className="flex gap-x-1 relative">
        <FaCartArrowDown className="w-6 h-6 fill-secondary-dark-blue"/>
        <small className="text-white text-xs font-medium w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 left-3 bg-primary-orange">0</small>
      </button>

      {/* Btn to show sm screens navbar */}
      <button className="hidden max-md:block ml-5" onClick={()=>{
        setNavIsActive(!navIsActive)
      }}>
        <HiOutlineMenu className="w-6 h-6"/>
      </button>
    </div>
  );
};

export default AccountInfo;
