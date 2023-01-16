import { Badge, Box } from "@chakra-ui/react";
import React from "react";
import Flight from "./Flight";

export default function TwoWayFlight() {
  return (
    <Box maxWidth={"800px"}>
      <Flight outInBond="returning" />
      <Flight />
    </Box>
  );
}
