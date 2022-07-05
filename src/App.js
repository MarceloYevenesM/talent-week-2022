import EstosDias from "./Containers/EstosDias";
import Portada from "./Containers/Portada";
import Footer from "./Components/Footer";
import ContainerRegistration from "./Components/ContainerRegistration";
import ItineraryContainer from "./Components/ItineraryContainer";
import ApplyCompanies from "./Components/ ApplyCompanies";
import ContainerBusiness from "./Components/ContainerBusiness";
import Speakers from "./Containers/Speakers";

const App = () => {
    return (
        <>
            <Portada />
            <ContainerRegistration />
            <EstosDias />
            <ItineraryContainer />
            <Speakers />
            <ApplyCompanies />
            <ContainerBusiness />
            <Footer />
        </>
    );
};

export default App;
