import "../styles/business.css";
import { Container, Stack, Text } from "@chakra-ui/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Business from "./Business";

const ContainerBusiness = () => {
    var settings = {
        infitie: true,
        lazyLoad: true,
        speed: 200,
        slidesToShow: 6,
        centerMode: true,
        centerPadding: "0px",
        arrows: true,
        autoplay: true,
        dots: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: true,
                    centerPadding: "0px",
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px",
                    dots: false,
                },
            },
        ],
    };

    return (
        <Stack alignItems="center" bgColor={"brand.200"} p={{ base: "6", md: "24" }} spacing={6}>
            <Text color={"brand.100"} textAlign={"center"} textStyle={"h1"}>
                empresas participantes que te están buscando:
            </Text>
            <Container height={"100%"} maxW={"100%"} p={12}>
                <Slider {...settings}>
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/fcc3a17ad2529df5945cb24c529591272064c8a8ca55956ceec82f4cc4a6764b/logo_menu_07.png"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/4ab7dc001593c677281190f1c75ae3fc440a6cdcaf69cc5286f0f8d38b8f3dfb/Logo_Aplicacio%CC%81n_fondo_blanco.png"
                        }
                    />
                    <Business
                        logo={
                            "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/quilmes.svg?alt=media&token=9a8c6588-88ce-4cca-a857-d7fe1ef30585"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/632aedda36f15a49f58a4feee12492246327da7c52ff48bcc811cc8946a7402b/BITSO_LOGO_DARKSIDE.png"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/151e3838ad580afccd17f670ae6cb77c3f2f6555956b17af34a6f6ab1ba7ce0d/IBM_logo%E2%94%AC%C2%AB_pos_CMYK.jpg"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/3fd27191eace23f423f3b5669f5e4d851b6c67aca63b45c1d6d18a0d76a0c3b5/Logo_talent.png"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/808006e716fa74df2758ece07fff8d231bdb67df2b7360515a5c886c3854e3be/download.png"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/d24ba66f36128c8a65dfc900456362de67dda871927ebd6a53eb4e8d30819a12/Avature_Logo___Positive___Transparent___Screen.png"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/4637052376a51daef6600540afcfbcda192adc66fa816727a2fb470bddad5abb/Ual%C3%A1___Imagotipo___Color.png"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/0b6e93583ae509f5e0c9b51c8e0a7476b4379d3f3c4bad5f22fe0d8d821532d7/elementos_KAvak_Mesa_de_trabajo_1_copia_4__1_.png"
                        }
                    />
                    <Business
                        logo={
                            "https://uploads-ssl.webflow.com/5f4d2915aacbff8a3255cf1b/60b68f6a34b2e95700900f3b_coderhouse-logo.svg"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/2c8637fdb40f2d5be7f58bddcb3916934a116fce7bb114bd077d8dfd8610f8bf/Logo_Xepelin_Digital.png"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/c2eeee15a90fbaba18474ad432a88732b34385daef02d228f805a8b81262d534/FB_LOGO_AMARILLO__1_.jpg"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/ede579129eed9cadf01404f28426f74528c317ab318483a0b0e7a364a9a6c992/logo_xpertal.png"
                        }
                    />
                    <Business
                        logo={
                            "https://api.typeform.com/responses/files/61b24b5397ab827277e43fb88740a77d99726b82bc0181e6e11275ca41ce3d12/master_logo_gaia_1200x1200__1_.jpg"
                        }
                    />
                </Slider>
            </Container>
        </Stack>
    );
};

export default ContainerBusiness;
