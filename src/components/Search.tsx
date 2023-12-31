import { Dispatch, SetStateAction } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface searchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  handleSearchProduct: () => void;
}

const Search = ({
  searchValue,
  setSearchValue,
  handleSearchProduct,
}: searchProps) => {
  return (
    <form className="w-11/12 max-w-xl h-11 relative">
      <IoSearchOutline className="w-6 h-6 absolute top-1/2 left-3 -translate-y-1/2" />
      <input
        className="w-full h-full pl-11 pr-5 rounded-full outline-none bg-slate-100 focus:border border-primary-blue transition"
        type="search"
        name="search"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleSearchProduct();
        }}
      />
    </form>
  );
};

export default Search;
