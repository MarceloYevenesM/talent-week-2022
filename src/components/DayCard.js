import React from "react";
import { Stack, Text } from "@chakra-ui/react";

const DayCard = ({ items, title }) => {
    return (
        <Stack
            bgColor={"brand.200"}
            borderColor={"brand.100"}
            borderWidth={{ base: ".2rem", md: ".3rem" }}
            boxShadow={{ base: "mobileN", md: "desktopN" }}
            height={"90%"}
            position={"relative"}
            w={{ base: "90%", md: "80%" }}
        >
            <Stack
                bgColor={"brand.100"}
                borderColor={"brand.200"}
                borderWidth={{ base: ".2rem", md: ".3rem" }}
                left={"-40px"}
                position={"absolute"}
                top={"-20px"}
                w={{ base: "70%", md: "100%" }}
            >
                <Text color={"brand.200"} textAlign={"center"} textStyle={"h2"}>
                    {title}
                </Text>
            </Stack>
            <Stack height="100%" justify="center" width={"100%"}>
                <Stack className="list" p={6}>
                    {items.map((item, i) => (
                        <Text key={i} color={"brand.100"} fontWeight={"bold"} textStyle={"p"}>
                            {item}
                        </Text>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default DayCard;
