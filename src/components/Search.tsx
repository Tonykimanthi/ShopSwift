import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <form className="w-11/12 max-w-xl h-11 grid grid-cols-[minmax(20px,auto)_100px] relative">
      <IoSearchOutline className="w-6 h-6 absolute top-1/2 left-3 -translate-y-1/2" />
      <input
        className="h-full pl-11 rounded-s-full outline-none bg-slate-100 focus:border-y focus:border-l border-primary-blue transition peer"
        type="search"
        name="search"
      />
      <button className="bg-slate-200 h-full rounded-e-full hover:bg-slate-300 peer-focus:border-y peer-focus:border-r border-primary-blue transition">Search</button>
    </form>
  );
};

export default Search;
