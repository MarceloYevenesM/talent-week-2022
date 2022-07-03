import React from "react";


import EstosDias from "./Containers/EstosDias";
import Portada from "./Containers/Portada";
import Footer from "./Components/Footer";

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
