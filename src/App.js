import React from "react";

import EstosDias from "./Containers/EstosDias";
import Portada from "./Containers/Portada";
import Footer from "./Components/Footer";
import ContainerRegistration from "./Components/ContainerRegistration";
import ItineraryContainer from "./Components/ItineraryContainer";
import ApplyCompanies from "./Components/ ApplyCompanies";
import ContainerBusiness from "./Components/ContainerBusiness";

const App = () => {
    return (
        <>
            <Portada />
            <EstosDias />
            <ContainerRegistration />
            <ItineraryContainer />
            <div>
                <ApplyCompanies />
                <ContainerBusiness />
            </div>
            <Footer />
        </>
    );
};

export default App;
