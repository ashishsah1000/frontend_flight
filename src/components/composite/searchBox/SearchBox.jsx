import React, { useState } from "react";
import { Badge, Box, Button, CardFooter, Heading } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, Stack, Text } from "@chakra-ui/react";
import Select from "react-select";
import { Input } from "@chakra-ui/react";
import {
  FaChair,
  FaChild,
  FaSearch,
  FaUser,
  FaUserAlt,
  FaUserAltSlash,
} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { HiArrowRight, HiOutlineArrowsRightLeft } from "react-icons/hi2";
export default function SearchBox({ callback = () => {} }) {
  const options = [
    { value: "Rahargora", label: "Rahargora" },
    { value: "Bistupur", label: "Bistupur" },
    { value: "Govindpur", label: "Govindpur" },
  ];
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [returnon, setreturnon] = useState("");
  const [departure, setdeparture] = useState("");
  const [child, setchild] = useState(0);
  const [adults, setadults] = useState(0);
  const [flightClass, setflightClass] = useState("economy");

  const [error, setError] = useState(false);
  const [oneWay, setoneWay] = useState(false);

  const handleSearch = () => {
    console.log(
      "🚀 ~ file: SearchBox.jsx:30 ~ handleSearch ~ handleSearch",
      from
    );
    console.log(
      "🚀 ~ file: SearchBox.jsx:30 ~ handleSearch ~ handleSearch",
      to
    );
    console.log(
      "🚀 ~ file: SearchBox.jsx:30 ~ handleSearch ~ handleSearch",
      returnon
    );
    console.log(
      "🚀 ~ file: SearchBox.jsx:30 ~ handleSearch ~ handleSearch",
      departure
    );
    console.log(
      "🚀 ~ file: SearchBox.jsx:30 ~ handleSearch ~ handleSearch",
      child
    );
    console.log(
      "🚀 ~ file: SearchBox.jsx:30 ~ handleSearch ~ handleSearch",
      adults
    );
    console.log(
      "🚀 ~ file: SearchBox.jsx:30 ~ handleSearch ~ handleSearch",
      flightClass
    );
    if (
      from != "" &&
      to != "" &&
      returnon != "" &&
      departure != "" &&
      flightClass != ""
    ) {
      // send back the object of the data
      callback({ from, to, departure, returnon, flightClass, child, adults });
    } else {
      setError(true);
    }
  };
  return (
    <Box
      bg="white"
      style={{
        borderRadius: "10px",
        width: "80vw",
        margin: "auto",
        background: "tomato",
        zIndex: 99,
        padding: "0px 0px",
      }}
      shadow={"xl"}
    >
      <Card>
        <CardHeader>
          <Heading size={"md"}>Book a Flight</Heading>
        </CardHeader>
        <CardBody marginTop={"-20px"}>
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

          <Stack direction={["column", "row"]} spacing="24px">
            <Box width="300px">
              <Stack direction={"row"} padding={"10px 0px"}>
                <Badge colorScheme={"yellow"}>From</Badge>
              </Stack>
              <Select options={options} onChange={(value) => setfrom(value)} />
            </Box>
            <Box width="300px">
              <Stack direction={"row"} padding={"10px 0px"}>
                <Badge colorScheme={"green"}>To</Badge>
              </Stack>
              <Select options={options} onChange={(value) => setto(value)} />
            </Box>
            <Box width="300px">
              <Stack direction={"row"} padding={"10px 0px"}>
                <Badge colorScheme={"yellow"}>Departure</Badge>
              </Stack>

              <Input
                type={"date"}
                placeholder="Returning Date"
                onChange={(e) => setdeparture(e.target.value)}
              />
            </Box>
            <Box width="300px">
              {!oneWay ? (
                <>
                  <Stack direction={"row"} padding={"10px 0px"}>
                    <Badge colorScheme={"green"}>Returning</Badge>
                  </Stack>

                  <Input
                    type={"date"}
                    placeholder="Returning Date"
                    onChange={(e) => setreturnon(e.target.value)}
                  />
                </>
              ) : (
                <></>
              )}
            </Box>
          </Stack>
        </CardBody>

        <CardFooter display={"flex"} flexWrap={"wrap"} fontSize={"12px"}>
          <Box flexGrow={"1"}>
            <Stack direction={"row"} textColor={"slategray"}>
              <Box display={"flex"}>
                <FaChair style={{ marginTop: "2px" }} />
                <select
                  placeholder="select option"
                  style={{ outline: "none" }}
                  onChange={(e) => setflightClass(e.target.value)}
                >
                  <option value="option1">Select Class</option>
                  <option value="Economy">Economy</option>
                  <option value="Buisness">Buisness</option>
                  <option value="First Class">First Class</option>
                </select>
              </Box>
              <Box display={"flex"}>
                <AiOutlineUser style={{ marginTop: "2px" }} />

                <select
                  placeholder="select option"
                  style={{ outline: "none" }}
                  onChange={(e) => setadults(e.target.value)}
                >
                  <option value="0">Adult 0</option>
                  <option value="1">Adult 1</option>
                  <option value="2">Adult 2</option>
                  <option value="3">Adult 3</option>
                </select>
              </Box>
              <Box display={"flex"} onChange={(e) => setchild(e.target.value)}>
                <FaChild style={{ marginTop: "2px" }} />

                <select placeholder="select option" style={{ outline: "none" }}>
                  <option value="0">Child 0</option>
                  <option value="1">Child 1</option>
                  <option value="2">Child 2</option>
                  <option value="3">Child 3</option>
                </select>
              </Box>
            </Stack>
            {error ? (
              <Text
                textColor={"tomato"}
                display={"flex"}
                fontSize={12}
                marginTop={4}
                fontWeight={"bold"}
              >
                <BiErrorCircle size={20} />
                &nbsp; Some fileds are missing
              </Text>
            ) : (
              <></>
            )}
          </Box>

          <Box>
            <Button
              onClick={() => handleSearch()}
              leftIcon={<FaSearch />}
              colorScheme={"teal"}
            >
              Search
            </Button>
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
}
