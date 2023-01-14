import React from "react";
import { Box, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box position={"fixed"} top={0} width={"100vw"}>
      <Box
        width={"100%"}
        display={"flex"}
        padding={"20px 20px"}
        textColor={"ghostwhite"}
        justifyContent={"center"}
      >
        <Link to="/book">
          <Box
            bg="rgba(22,22,22,.4)"
            padding={"10px 20px"}
            borderRadius={"10px 0px 0px 10px"}
          >
            Home
          </Box>
        </Link>
        <Link to="/search">
          <Box bg="rgba(22,22,22,.4)" padding={"10px 20px"}>
            Bookings
          </Box>
        </Link>
        <Link to="/book">
          <Box
            bg="rgba(22,22,22,.4)"
            padding={"10px 20px"}
            borderRadius={"0px 10px 10px 0px"}
          >
            Tracking
          </Box>
        </Link>
      </Box>
    </Box>
  );
}
