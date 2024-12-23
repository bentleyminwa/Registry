import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search?q=${term}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div>
          <VscSearch className="absolute top-0 left-0 mt-2 ml-2 text-gray-500" />
        </div>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 w-full pl-8 text-sm text-gray-500 font-semibold outline-none"
          placeholder="Search packages..."
        />
      </div>
    </form>
  );
};

export default SearchInput;
