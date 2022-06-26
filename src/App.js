import React from "react";
import { ChakraProvider, Stack, Text } from "@chakra-ui/react";

const App = () => {
    return (
        <ChakraProvider>
            <Stack>
                <Text>HOLA</Text>
            </Stack>
        </ChakraProvider>
    );
};

export default App;
