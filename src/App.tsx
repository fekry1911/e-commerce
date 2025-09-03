import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayoutComponent from "./Layouts/MainLayoutComponent";
import Contact from "./component/contact";
import About from "./component/about";
import Home from "./component/Home";
import ProductDetails from "./component/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutComponent />,
    errorElement: <div>Oops! Something went wrong.</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
