import Layout from "./components/Layout.jsx";
import ErrorElement from "./pages/errorElement/ErrorElement.jsx";
import App from "./App.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Cart from "./pages/cart/cart.jsx";
import fakeItems from "./pages/shop/fakeItems.js";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },
];

export default routes;
