import App from "./App.jsx";

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/shop",
    element: <div>shop</div>
  },
  {
    path: "cart",
    element: <div>cart</div>
  }
];

export default routes;
