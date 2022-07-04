import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const DayCard = ({ height, width, items, title }) => {
  return (
    <Flex
      className="containerDay"
      direction="column"
      height={height}
      width={width}
    >
      <Text className="title" fontSize="1.25rem">
        {title}
      </Text>
      <Flex direction={"column"} justify="center" width={"100%"} height="100%">
        <ul className="list">
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Flex>
    </Flex>
  );
};

export default DayCard;
