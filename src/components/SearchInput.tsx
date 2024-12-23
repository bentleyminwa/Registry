import { useState } from "react";

const SearchInput = () => {
  const [term, setTerm] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
