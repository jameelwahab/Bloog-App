import React from "react";
import Postlisting from "./components/postlisting";
import Postdetail from "./components/postdetail";
import { Routes, Route, useRoutes } from "react-router-dom";
import Layout from "./Layout/Layout";

function Routes_list() {
  // return (
  //   <Routes>
  //     <Route path="/" element={<Postlisting />} />
  //     <Route path="/:id" element={<Postdetail />} />
  //   </Routes>
  // );
  return useRoutes([
    //array of layouts
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Postlisting /> },
        { path: "/:id", element: <Postdetail /> },
      ],
    },
  ]);
}

export default Routes_list;
