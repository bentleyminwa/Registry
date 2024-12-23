import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="border p-4 shadow-sm mb-4">
      <div className="grid grid-cols-2 w-11/12 mx-auto">
        <div>
          <Link to="/" className="font-bold text-xl text-gray-600">
            NPM Registry
          </Link>
        </div>
        <div className="w-full">
          <SearchInput />
        </div>
      </div>
    </header>
  );
};

export default Header;
