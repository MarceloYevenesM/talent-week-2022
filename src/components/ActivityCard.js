import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ItineraryCardTitle from "./ItineraryCardTitle";

const ActivityCard = ({ date, title, content }) => {
  return (
    <Flex direction="column" gap={4} width="70%">
      <ItineraryCardTitle title={date} />
      <Text fontSize="1.875rem">{title}</Text>
      <Text fontSize="1.25rem">{content}</Text>
    </Flex>
  );
};

export default ActivityCard;
