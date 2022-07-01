import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ItineraryContainer from "./components/ItineraryContainer";

const App = () => {
  return (
    <ChakraProvider>
      <ItineraryContainer />
    </ChakraProvider>
  );
};

export default App;
