import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";

const AccountInfo = () => {
  return (
    <div className="mr-5 flex items-center gap-x-5">
      <button className="text-primary-blue text-lg px-5 py-1 rounded hover:text-secondary-blue transition">
        <Link to="/login">Login</Link>
      </button>

      <button>
        <MdFavoriteBorder className="w-6 h-6 fill-primary-dark-blue"/>
      </button>

      <button className="flex gap-x-1 relative">
        <FaCartArrowDown className="w-6 h-6 fill-secondary-dark-blue"/>
        {/* <span className="font-medium self-end">Cart</span> */}
        <small className="text-white text-xs font-medium w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 left-3 bg-primary-orange">0</small>
      </button>
    </div>
  );
};

export default AccountInfo;
