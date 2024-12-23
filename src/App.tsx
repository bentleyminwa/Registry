import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
        loader: async ({ request }) => {
          const { searchParams } = new URL(request.url);
          const term = searchParams.get("term");

          if (!term) {
            throw new Error("Missing search term");
          }

          const res = await fetch(
            `https://registry.npmjs.com/-/v1/search?text=${term}`
          );
          const data = await res.json();

          return data.objects;
        },
      },
      {
        path: "/details/:name",
        element: <Details />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
