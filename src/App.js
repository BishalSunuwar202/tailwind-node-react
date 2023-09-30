import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProductsPage, { loader as productsLoader } from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/error";
import ProductDetails, {
  loader as productDetailLoader,
} from "./pages/ProductDetails";
import AddProducts from "./pages/AddProducts";
import ProductRootLayout from "./pages/ProductsRootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />, //path: ""
      },
      {
        path: "products",
        element: <ProductRootLayout />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
            loader: productsLoader,
          },
          {
            path: ":productId",
            element: <ProductDetails />,
            loader: productDetailLoader,
          },
          { path: "add-products", element: <AddProducts /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
