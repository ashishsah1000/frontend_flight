import React from "react";
import { Box } from "@chakra-ui/react";
import { Flight, SearchBox, TwoWayFlight } from "../../components/composite";
import { Navbar } from "../../components/composite";
export default function Home() {
  return (
    <div>
      <Box height={"100vh"} width={"100vw"} bg="white">
        <Box
          style={{
            height: "60vh",
            width: "150vw",
            marginLeft: "-25vw",
            borderRadius: "0 0 100% 100%",
            background:
              "url('https://imgcld.yatra.com/ytimages/image/upload/t_ann_trip_banner_desktop/v1517481215/AdvNation/ANN_TRP512/Dubai-Hot-Air-Ballooning_1439553571_Lv7oNW.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "-280px",
          }}
          bg={"red"}
        ></Box>
        <Box style={{ marginTop: "-100px" }}>
          <SearchBox />
        </Box>
        <Box width={"80%"} padding={"40px 40px"} margin={"auto"}>
          <TwoWayFlight />
        </Box>
      </Box>
    </div>
  );
}
