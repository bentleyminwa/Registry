import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header>
      <Link to="/">NPM Registry</Link>
      <SearchInput />
    </header>
  );
};

export default Header;
