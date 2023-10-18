import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProductsPage, { loader as productsLoader } from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/error";
import ProductDetails, {
  loader as productDetailLoader,
  action as deleteProductAction,
} from "./pages/ProductDetails";
//import AddProducts, { action as newProductAction } from "./pages/AddProducts";
import AddProducts from "./pages/AddProducts";
import { action as manipulateProductAction } from "./components/ProductForm";
import ProductRootLayout from "./pages/ProductsRootLayout";
import EditProduct from "./pages/EditProduct";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { action as logoutAction } from "./pages/Logout";

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
      { path: "auth", element: <AuthenticationPage />, action: authAction },
      { path: "logout", action: logoutAction },

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
            id: "product-detail",
            loader: productDetailLoader,
            children: [
              {
                index: true,
                element: <ProductDetails />,
                action: deleteProductAction,
              },
              {
                path: "edit",
                element: <EditProduct />,
                action: manipulateProductAction,
              },
            ],
          },
          {
            path: "add-product",
            element: <AddProducts />,
            //action: newProductAction,
            action: manipulateProductAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
