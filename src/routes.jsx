import ErrorElement from "./pages/errorElement/ErrorElement.jsx";
import App from "./App.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Cart from "./pages/cart/cart.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "cart",
    element: <Cart />
  }
];

export default routes;
