import React from "react";
import { ChakraProvider, Stack, Text } from "@chakra-ui/react";

const App = () => {
    return (
        <ChakraProvider>
            <Stack>
                <Text>CONTAINER PORTADA</Text>
            </Stack>
        </ChakraProvider>
    );
};

export default App;
