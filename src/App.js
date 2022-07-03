import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ApplyCompanies from "./components/ ApplyCompanies";
import ContainerBusiness from "./components/ContainerBusiness";


const App = () => {
  return (
    <ChakraProvider>
      <div>
      <ApplyCompanies />
      <ContainerBusiness />
      </div>
    </ChakraProvider>
  );
};

export default App;
