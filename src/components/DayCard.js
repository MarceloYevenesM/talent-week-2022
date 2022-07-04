import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const DayCard = ({ height, width, items, title }) => {
    return (
        <Flex className="containerDay" direction="column" height={height} width={width}>
            <Text className="title" fontSize="1.25rem">
                {title}
            </Text>
            <Flex direction={"column"} height="100%" justify="center" width={"100%"}>
                <ul className="list">
                    {items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </Flex>
        </Flex>
    );
};

export default DayCard;
