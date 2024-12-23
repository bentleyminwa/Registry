import { searchPackages } from "../../api/queries/searchPackages";

interface RequestObject {
  request: Request;
}

export async function SearchLoader({ request }: RequestObject) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Missing search term");
  }

  const results = await searchPackages(term);

  return {
    searchResults: results,
  };
}
