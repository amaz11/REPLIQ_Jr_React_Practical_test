import Client from "../layout/client/Client";
import Admin from "../layout/admin/Admin";
import Dashboard from "../pages/admin/Dashboard";
import Home from "../pages/client/Home";
import Products from "../pages/admin/Products";
import Orders from "../pages/admin/Orders";
import Customers from "../pages/admin/Customers";
import Authentication from "../layout/auth/Authentication";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminHoc from "../components/libs/AdminHoc";
import EnrollHoc from "../components/libs/EnrollHoc";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminHoc>
        <Admin />
      </AdminHoc>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/products",
        element: <Products />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/customers",
        element: <Customers />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <EnrollHoc>
        <Authentication />
      </EnrollHoc>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
