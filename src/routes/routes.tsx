import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ShopDetails from "../pages/ShopDetails/ShopDetails";
import Cart from "../pages/Cart/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category-details",
        element: <CategoryDetails />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/shop-details",
        element: <ShopDetails />,
      },
      {
        path: "/cart-details",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
