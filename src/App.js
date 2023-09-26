import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/error";
import ProductDetails from "./pages/ProductDetails";
import AddProducts from "./pages/AddProducts";

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
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetails /> },
      { path: "add-products", element: <AddProducts /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
