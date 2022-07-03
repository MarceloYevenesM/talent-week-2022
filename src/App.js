import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ContainerBusiness from "./components/ContainerBusiness";

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <ContainerBusiness />
      </div>
    </ChakraProvider>
  );
};

export default App;
