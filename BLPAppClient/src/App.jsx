import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import './App.scss';
import CreateTransaksiContainer from "./pages/CreateTransaksi/CreateTransaksiContainer";
import DetailTransaksiContainer from "./pages/DetailTransaksi/DetailTransaksiContainer";
import EditTransaksiContainer from "./pages/EditTransaksi/EditTransaksiContainer";
import Beranda from "./pages/Beranda/Beranda";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Beranda/>
        },
        {
          path:"/list",
          element: <Home exact component={Home} />
        },
        {
          path:"/login",
          element: <Login />
        },
        {
          path:"/register",
          element: <Register />
        },
        {
          path: "/create",
          element: <CreateTransaksiContainer exact component={CreateTransaksiContainer} />
        },
        {
          path: "/detail/:id",
          element: <DetailTransaksiContainer exact component={DetailTransaksiContainer} />
        },
        {
          path: "/edit/:id",
          element: <EditTransaksiContainer exact component={EditTransaksiContainer} />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
