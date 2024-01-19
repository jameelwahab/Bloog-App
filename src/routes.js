import React from "react";
import Postlisting from "./components/postlisting";
import Postdetail from "./components/postdetail";
import { Routes, Route } from "react-router-dom";

function Routes_list() {
  return (
    <Routes>
      <Route path="/" element={<Postlisting />} />
      <Route path="/:id" element={<Postdetail />} />
    </Routes>
  );
}

export default Routes_list;
