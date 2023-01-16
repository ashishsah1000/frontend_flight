import React from "react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import { Flight, Navbar } from "../components/composite";
import Search from "./search/Search";

export default function Index() {
  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/home" element={<Home />}>
          {" "}
        </Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
