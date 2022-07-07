import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./Theme/theme";
import App from "./App";
import Fonts from "./Theme/Fonts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Fonts />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
);
