import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Root from "./pages/Root";
import { SearchLoader } from "./pages/Search/SearchLoader";
import Search from "./pages/Search/SearchPage";

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
        loader: SearchLoader,
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
