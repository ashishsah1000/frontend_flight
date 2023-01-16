import { Badge, Box, Button, Divider, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiArrowRight, HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { Flight, SearchBox } from "../../components/composite";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [showTicketSearch, setshowTicketSearch] = useState(false);
  const [oneWay, setoneWay] = useState(false);

  return (
    <Box height={"100vh"} width={"100vw"} bg="white" display={"flex"}>
      <Box
        position={"fixed"}
        bottom={"20px"}
        right={"20px"}
        padding={"20px 20px"}
        borderRadius={"full"}
        color={"ghostwhite"}
        shadow={"2xl"}
        bg={"teal"}
        cursor={"pointer"}
        onClick={() => setshowTicketSearch(!showTicketSearch)}
      >
        <FaSearch />
      </Box>
      {showTicketSearch ? (
        <Box
          width={"450px"}
          position={"fixed"}
          bottom={"100px"}
          right={"20px"}
          zIndex={"100"}
        >
          <SearchBox width="420" />
        </Box>
      ) : (
        <></>
      )}

      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        spacing={"24px"}
      >
        <Box
          width={{ base: "100vw", lg: "70vw" }}
          height={"100vh"}
          overflowY={"scroll"}
          padding={"20px 20px"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
            <Box display={"flex"} gap={"12px"}>
              <Button
                onClick={() => setoneWay(false)}
                colorScheme={!oneWay ? "teal" : "gray"}
                size={"sm"}
                leftIcon={<HiOutlineArrowsRightLeft />}
              >
                Two Way
              </Button>
              <Button
                onClick={() => setoneWay(true)}
                colorScheme={oneWay ? "teal" : "gray"}
                leftIcon={<HiArrowRight />}
                size={"sm"}
              >
                One Way
              </Button>
            </Box>
            <Flight />
            <Flight />
            <Flight />
            <Flight />
            <Flight />
            <Flight />
          </Box>
        </Box>
        <Box
          width={{ base: "100vw", lg: "30vw" }}
          height={"90vh"}
          padding={"20px 20px"}
          borderRadius={"base"}
        >
          <Box padding={"20px 20px"} width={80} bg="white" shadow={"lg"}>
            <Heading size={"md"}>Booking Details</Heading>
            <Box borderBottom={"dashed 2px teal"} marginTop={"4px"}></Box>
            <Box padding={"20px 0px"}>
              <Badge colorScheme={"orange"}>Outbound</Badge>
            </Box>
            <Box padding={"20px 0px"}>
              <Badge colorScheme={"teal"}>Returning</Badge>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
