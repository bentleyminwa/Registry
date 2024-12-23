import { useLoaderData } from "react-router-dom";

const Search = () => {
  const data = useLoaderData();

  console.log(data);
  return <div>Search</div>;
};

export default Search;
