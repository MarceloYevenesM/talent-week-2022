import React from "react";

import { ChakraProvider } from "@chakra-ui/react";


import EstosDias from "./Containers/EstosDias";
import Portada from "./Containers/Portada";
import Footer from "./Components/Footer";
import ContainerRegistration from "./Components/ContainerRegistration";

const App = () => {
    return (
        <>
            <Portada />
            <EstosDias />
            <ContainerRegistration />
            <Footer />
        </>
    );
};

export default App;
