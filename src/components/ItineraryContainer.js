import React from "react";

import "../styles/itinerary.css";
import ItineraryCard from "./ItineraryCard";

const ItineraryContainer = () => {
    return (
        <div className="itineraryContainer">
            <div className="background">
                <div className="color" />
                <div className="img" />
            </div>

            <ItineraryCard />
        </div>
    );
};

export default ItineraryContainer;
