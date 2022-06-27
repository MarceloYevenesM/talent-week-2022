import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Portada from "./Containers/Portada";
import theme from "./Theme/theme";

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Portada />
        </ChakraProvider>
    );
};

export default App;
