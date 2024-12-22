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
