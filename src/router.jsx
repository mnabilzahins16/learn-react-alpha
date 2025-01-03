import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddProduct from "./pages/AddProduct";
import GetProduct from "./pages/GetProduct";
import GetAPIMoogle from "./pages/GetAPIMoogle";

export const routeApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/new-product",
    element: <GetProduct />,
  },
  {
    path: "/get-moogle",
    element: <GetAPIMoogle />,
  },
]);
