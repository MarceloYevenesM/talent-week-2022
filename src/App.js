import React from "react";

import EstosDias from "./Containers/EstosDias";
import Portada from "./Containers/Portada";
import Footer from "./Components/Footer";
import ContainerRegistration from "./Components/ContainerRegistration";
import ItineraryContainer from "./Components/ItineraryContainer";

const App = () => {
    return (
        <>
            <Portada />
            <EstosDias />
            <ContainerRegistration />
            <ItineraryContainer />
            <Footer />
        </>
    );
};

export default App;
