import { Text } from "@chakra-ui/react";
import React from "react";

const ItineraryCardTitle = ({ title }) => {
    return (
        <div className="card-title">
            <Text className="text" color={"brand.100"} fontWeight={"black"} textStyle={"h2"}>
                {title}
            </Text>
        </div>
    );
};

export default ItineraryCardTitle;
