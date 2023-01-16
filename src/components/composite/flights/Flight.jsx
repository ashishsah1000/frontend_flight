import React from "react";
import { Badge, Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import {
  FaChevronCircleRight,
  FaClock,
  FaDollarSign,
  FaLocationArrow,
} from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";

export default function Flight({
  outInBond = "",
  departureTime = "10:00",
  landingTime = "18:00",
  timeTaken = "8 hours",
  landingStaion = "MUB",
  boardingStaion = "BSLR",
  landingStaionDetails = "Mumbari",
  boardingStaionDetails = "Bhubneswar",
  logoIconUrl = "https://static.wikia.nocookie.net/logopedia/images/4/45/Vistara_2014-background.svg",
  flightCompany = "Vistara",
  price = "400",
}) {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      margin={"auto"}
      boxShadow={"md"}
      borderRadius={"base"}
      padding={{ base: "20px 0px" }}
      justifyContent={"center"}
      maxWidth={"800px"}
      position={"relative"}
      bg="white"
    >
      <Box
        width={"200px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"20px 0"}
      >
        <Box>
          {outInBond != "" ? (
            <Badge
              position={"absolute"}
              left="-31px"
              top="50px"
              transform={"rotate(-90deg)"}
              colorScheme={outInBond == "outbound" ? "facebook" : "teal"}
            >
              {outInBond}
            </Badge>
          ) : (
            <></>
          )}
        </Box>
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://static.wikia.nocookie.net/logopedia/images/4/45/Vistara_2014-background.svg"
        />
      </Box>
      <Box
        maxWidth={"400px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Box display="flex" flexDir="column" alignItems={"flex-start"}>
          <Heading display={"flex"} size={"sm"}>
            <HiMapPin size={20} /> &nbsp;{departureTime}
          </Heading>
          <Text color={"skyblue"}> {boardingStaion}</Text>
          <Text fontSize={"8px"} color={"gray"}>
            {boardingStaionDetails}
          </Text>
        </Box>
        <Box
          maxWidth={"150px"}
          height={"1px"}
          borderTop={"dashed 1px teal"}
          padding={"2px 20px"}
          margin={"30px 10px"}
        >
          <Badge display={"flex"} fontSize={"8px"} textColor={"gray"}>
            {" "}
            <FaClock style={{ marginTop: "2.3px" }} /> &nbsp; 8 hours{" "}
          </Badge>
        </Box>
        <Box display="flex" flexDir="column" alignItems={"flex-end"}>
          <Heading display={"flex"} size={"sm"}>
            <HiMapPin size={20} /> &nbsp;{landingTime}
          </Heading>
          <Text color={"skyblue"}>{landingStaion}</Text>
          <Text fontSize={"8px"} color={"gray"}>
            {landingStaionDetails}
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"300px"}
      >
        <Box
          borderLeft={{ lg: "1px dashed gray", md: "none", sm: "none" }}
          padding={"20px 20px"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"space-between"}
          gap={"8px"}
        >
          <Text align={"center"} fontSize={"x-small"}>
            {flightCompany} - Cost Per Person
          </Text>
          <Heading
            display={"flex"}
            fontSize={"x-large"}
            margin={"4px 0px"}
            justifyContent={"center"}
          >
            <FaDollarSign style={{ marginTop: "2px" }} />
            {price}
          </Heading>

          <Button
            size={"sm"}
            leftIcon={<FaChevronCircleRight />}
            colorScheme={"gray"}
          >
            Select Tickets
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
