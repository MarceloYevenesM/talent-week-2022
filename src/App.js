import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ChakraProvider>
      
      <div>
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default App;
