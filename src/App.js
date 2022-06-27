import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ContainerRegistration from "./components/ContainerRegistration";

const App = () => {
  return (
    <ChakraProvider>
      <div className="body">
        <ContainerRegistration />
      </div>
    </ChakraProvider>
  );
};

export default App;
