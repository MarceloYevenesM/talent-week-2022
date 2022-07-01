import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ItineraryCardTitle from "./ItineraryCardTitle";

const ActivityCard = ({ date, title, content }) => {
  return (
    <Flex direction="column" gap={4} width="80%">
      <ItineraryCardTitle title={date} />
      <Text fontSize={{base: "1rem" , lg: "1.3rem" , xl:"1.875rem"}}>{title}</Text>
      <Text fontSize={{base: "1.25rem"}}>{content}</Text>
    </Flex>
  );
};

export default ActivityCard;
