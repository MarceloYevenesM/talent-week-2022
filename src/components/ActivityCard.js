import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

import ItineraryCardTitle from "./ItineraryCardTitle";

const ActivityCard = ({ date, title, content }) => {
    return (
        <Stack spacing={6} width={{ base: "100%", md: "80%" }}>
            <ItineraryCardTitle title={date} />
            <Text color={"brand.100"} fontWeight={"black"} textStyle={"h3"}>
                {title}
            </Text>
            <Text color={"brand.100"} textAlign={"justify"} textStyle={"p"}>
                {content}
            </Text>
        </Stack>
    );
};

export default ActivityCard;
