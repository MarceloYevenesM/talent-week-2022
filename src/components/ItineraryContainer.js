import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import "../styles/itinerary.css";
import ItineraryCard from "./ItineraryCard";

const ItineraryContainer = () => {
    return (
        <Stack
            id={"agenda"}
            justifyContent={"center"}
            maxW={"100%"}
            p={{ base: "6", md: "24" }}
            position={"relative"}
        >
            <Stack h={"100%"} position={"absolute"} right={"0px"} top={"0px"} w={"40%"}>
                <Stack
                    bgImage={
                        "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/agendaImagen.png?alt=media&token=1e4e425b-5a8f-45d1-bdd6-8ac8bcd6db0b"
                    }
                    bgPosition={"center"}
                    bgRepeat={"no-repeat"}
                    bgSize={"cover"}
                    h={"100%"}
                    w={"100%"}
                />
            </Stack>
            <Stack
                bgColor={"brand.200"}
                borderColor={"brand.100"}
                borderWidth={".5rem"}
                boxShadow={{ base: "mobileN", md: "desktopN" }}
                p={2}
                position={"absolute"}
                top={"-35px"}
                width={"200px"}
            >
                <Text color={"brand.100"} textAlign={"center"} textStyle={"h1"}>
                    agenda
                </Text>
            </Stack>
            <Stack alignItems={"center"} p={6} zIndex={1}>
                <ItineraryCard />
            </Stack>
        </Stack>
    );
};

export default ItineraryContainer;
