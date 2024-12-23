import { useState } from "react";
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
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1"
      />
    </form>
  );
};

export default SearchInput;
