import React from "react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import { Navbar } from "../components/composite";

export default function Index() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
