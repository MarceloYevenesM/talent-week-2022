import { Stack } from "@chakra-ui/react";

import NavBar from "../Components/Navbar/NavBar";
import Hero from "../Components/Portada/Hero";
import Banner from "../Components/Banner/Banner";

const Portada = () => {
    const gridImageProps = {
        backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0) 69px, rgba(255, 255, 255, 0.22) 69px, rgba(255, 255, 255, 0.23) 70px), linear-gradient(90deg, rgba(255, 255, 255, 0) 69px, rgba(255, 255, 255, 0.05) 69px, rgba(255, 255, 255, 0.21) 70px)",
    };

    return (
        <Stack bgSize={"70px 70px, 70px 70px"} {...gridImageProps}>
            <NavBar />
            <Hero />
            {/* <Banner /> */}
        </Stack>
    );
};

export default Portada;
