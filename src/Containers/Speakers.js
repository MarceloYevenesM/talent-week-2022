import { Container, Stack, Text, SimpleGrid } from "@chakra-ui/react";

import CardDosSpeakers from "../Components/Speakers/CardDosSpeakers";
import CardSpeaker from "../Components/Speakers/CardSpeaker";
CardSpeaker;

import DiaItem from "../Components/Speakers/DiaItem";

const Speakers = () => {
    const gridImageProps = {
        backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0) 69px, rgba(0, 0, 0, .25) 69px, rgba(0, 0, 0, .25) 70px), linear-gradient(90deg, rgba(255, 255, 255, 0) 69px, rgba(0, 0, 0, .25) 69px, rgba(0,0,0, .25) 70px)",
    };

    return (
        <Stack>
            <Stack
                bgColor={"brand.200"}
                bgSize={"70px 70px, 70px 70px"}
                height="100%"
                {...gridImageProps}
            >
                <Container maxW="100%" padding={{ base: "6", md: "24" }}>
                    <Stack
                        bgColor={"brand.200"}
                        borderColor={"brand.100"}
                        borderWidth={{ base: ".35rem", md: ".5rem" }}
                        boxShadow={{ base: "mobileN", md: "desktopN" }}
                        w={{ base: "50%", md: "20%" }}
                    >
                        <Text color={"brand.100"} p={2} textAlign={"center"} textStyle={"h1"}>
                            speakers
                        </Text>
                    </Stack>
                    <Stack marginTop={12} spacing={12}>
                        <DiaItem texto={"miercoles 27 de julio"} />
                        <SimpleGrid
                            minChildWidth={{ base: "200px", md: "400px" }}
                            spacing={{ base: "48", md: "36" }}
                        >
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/fcc3a17ad2529df5945cb24c529591272064c8a8ca55956ceec82f4cc4a6764b/logo_menu_07.png"
                                }
                                horarios={"14.00 a 14.30 (Arg.)-12.00 a 12.30 (Méx.)"}
                                img={
                                    "url('https://api.typeform.com/responses/files/72c628f6f3ad823717b98726c3f7b7782544e634b3802b49968449b0d9e5de84/83e8ad94_cf61_4377_a9e3_cd78c45ce19d.JPG')"
                                }
                                nombre={"Agustin Vergara"}
                                puesto={"Tech Recruiter"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/4ab7dc001593c677281190f1c75ae3fc440a6cdcaf69cc5286f0f8d38b8f3dfb/Logo_Aplicacio%CC%81n_fondo_blanco.png"
                                }
                                horarios={"14.30 a 15.00 (Arg.)-12.30 a 13.00 (Méx.)"}
                                img={
                                    "url('https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/uala.jpg?alt=media&token=fba544ed-681f-4918-90f3-47d44f6df485')"
                                }
                                nombre={"Fausto Muñoz"}
                                puesto={"SrTalent Acquisition Analyst"}
                                size={"150px"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/quilmes.svg?alt=media&token=9a8c6588-88ce-4cca-a857-d7fe1ef30585"
                                }
                                horarios={"14.00 a 14.30 (Arg.)-12.00 a 12.30 (Méx.)"}
                                img={"url('')"}
                                nombre={"Candelaria Torrado"}
                                puesto={"Directora Gente Tecnología & Central Servicios"}
                                size={"100px"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/632aedda36f15a49f58a4feee12492246327da7c52ff48bcc811cc8946a7402b/BITSO_LOGO_DARKSIDE.png"
                                }
                                horarios={"14.30 a 15.00 (Arg.)-12.30 a 13.00 (Méx.)"}
                                img={
                                    "url('https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/bitso.jpg?alt=media&token=3cbcf7a0-7164-4604-8d5e-7d633df816c8')"
                                }
                                nombre={"Luiz Resende"}
                                puesto={"Head of UX and Product Design"}
                                size={"300px"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/151e3838ad580afccd17f670ae6cb77c3f2f6555956b17af34a6f6ab1ba7ce0d/IBM_logo%E2%94%AC%C2%AB_pos_CMYK.jpg"
                                }
                                horarios={"15.00 a 15.30 (Arg.)-13.00 a 13.30 (Méx.)"}
                                img={
                                    "url('https://api.typeform.com/responses/files/703d0093dbf0aec5ebfdb0530e31802b93006b0d2b71f1c353b7eea7f2d12d9e/Vale.png')"
                                }
                                nombre={"Valeria Larios"}
                                puesto={"Early Professional Lead for Mexico and Costa Rica"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/3fd27191eace23f423f3b5669f5e4d851b6c67aca63b45c1d6d18a0d76a0c3b5/Logo_talent.png"
                                }
                                horarios={"15.30 a 16.00 (Arg.)-13.30 a 14.00 (Méx.)"}
                                img={
                                    "url('https://api.typeform.com/responses/files/e1b17493912e005c01916272f9d1cb4113497af4c67a935c0eafe3935ab80a23/ARP.jpg')"
                                }
                                nombre={"Álvaro Ruiz"}
                                puesto={"Country Manager México"}
                                size={"100px"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/808006e716fa74df2758ece07fff8d231bdb67df2b7360515a5c886c3854e3be/download.png"
                                }
                                horarios={"16.00 a 16.30 (Arg.)-14.00 a 14.30 (Méx.)"}
                                img={
                                    "url('https://api.typeform.com/responses/files/8212706f37c37c9fb42ba1db9f9949cc9b8e6a9217fc437c99f83c7cd5d57cdd/Delfina_Tagtachian.jpeg')"
                                }
                                nombre={"Delfina Tagtachian"}
                                puesto={"Recruiter Analyst IT"}
                                size={"100px"}
                            />
                            <CardDosSpeakers
                                empresa={
                                    "https://api.typeform.com/responses/files/d24ba66f36128c8a65dfc900456362de67dda871927ebd6a53eb4e8d30819a12/Avature_Logo___Positive___Transparent___Screen.png"
                                }
                                horarios={"16.30 a 17.00 (Arg.)-14.30 a 15.00 (Méx.)"}
                                img={
                                    "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/avanture%201.jpg?alt=media&token=0f4819c0-b5ad-49a1-b685-b7584b469097"
                                }
                                imgDos={
                                    "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/avanture%202.jpg?alt=media&token=6654ddb6-59f6-43d9-906d-14cdb7e48792"
                                }
                                nombre={"Jeremías Nemerovsky y Marcela Alvarez"}
                                puesto={"Talent Acquisition Specialist, Engineering"}
                                size={"150px"}
                            />
                        </SimpleGrid>
                    </Stack>
                    <Stack marginTop={48} spacing={12}>
                        <DiaItem texto={"jueves 28 de julio"} />
                        <SimpleGrid
                            // bgColor={"blue.500"}
                            minChildWidth={{ base: "200px", md: "400px" }}
                            spacing={{ base: "48", md: "36" }}
                        >
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/2d176a0214eaa58a7387cc0ee1de6c50b851a223ff7bb58084c7c97b8dfa9f8b/download.png"
                                }
                                horarios={"14.00 a 14.30 (Arg.)-12.00 a 12.30 (Méx.)"}
                                img={
                                    "url('https://api.typeform.com/responses/files/ec64f64fa1e9373725d384b6a502b2037c4f51ef824c2ac559cde8ba8a19afc3/IMG_20190820_164133__1_.jpg')"
                                }
                                nombre={"Brandon Arreola Saucedo"}
                                puesto={"IT Recruiter (MX)"}
                            />

                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/4637052376a51daef6600540afcfbcda192adc66fa816727a2fb470bddad5abb/Ual%C3%A1___Imagotipo___Color.png"
                                }
                                horarios={"14.30 a 15.00 (Arg.)-12.30 a 13.00 (Méx.)"}
                                img={"url('')"}
                                nombre={"Pablo Andrés Guzzi"}
                                puesto={"Chief Data & Analytics Officer"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/0b6e93583ae509f5e0c9b51c8e0a7476b4379d3f3c4bad5f22fe0d8d821532d7/elementos_KAvak_Mesa_de_trabajo_1_copia_4__1_.pngg"
                                }
                                horarios={"15.00 a 15.30 (Arg.)-13.00 a 13.30 (Méx.)"}
                                img={
                                    "url('https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/kavak.jpg?alt=media&token=35baf407-e660-4dfb-8bb6-c1c53f7e4cd0')"
                                }
                                nombre={"Camila Mosto"}
                                puesto={"Talent Acquisition Lead"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://uploads-ssl.webflow.com/5f4d2915aacbff8a3255cf1b/60b68f6a34b2e95700900f3b_coderhouse-logo.svg"
                                }
                                horarios={"15.30 a 16.00 (Arg.)-13.30 a 14.00 (Méx.)"}
                                img={""}
                                nombre={"Lu Castro"}
                                puesto={"Responsable de HR Talentos Académicos"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/2c8637fdb40f2d5be7f58bddcb3916934a116fce7bb114bd077d8dfd8610f8bf/Logo_Xepelin_Digital.png"
                                }
                                horarios={"16.00 a 16.30 (Arg.)-14.00 a 14.30 (Méx.)"}
                                img={
                                    "https://api.typeform.com/responses/files/af8ffd4f879b7dcad49ed77712512865d3f1e62bcce888c9768df1bbb500dc60/image__3_.png"
                                }
                                nombre={"Lucas Rencoret"}
                                puesto={"Head of Product"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/c2eeee15a90fbaba18474ad432a88732b34385daef02d228f805a8b81262d534/FB_LOGO_AMARILLO__1_.jpg"
                                }
                                horarios={"16.30 a 17.00 (Arg.)-14.30 a 15.00 (Méx.)"}
                                img={
                                    "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/flybondi.png?alt=media&token=5bcac25f-0f64-4a3c-ba20-e0f61384bb24"
                                }
                                nombre={"Manuel Alvarez"}
                                puesto={"Gerente de Data & Business Intelligence"}
                            />
                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/ede579129eed9cadf01404f28426f74528c317ab318483a0b0e7a364a9a6c992/logo_xpertal.png"
                                }
                                horarios={"17.00 a 17.30 (Arg.)-15.00 a 15.30 (Méx.)"}
                                img={
                                    "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/xpertal.png?alt=media&token=f25f0262-ab77-4642-8250-4334c805faa4"
                                }
                                nombre={"Adriana Rios"}
                                puesto={" CEO - Atracción y planeación de Talento"}
                            />
                            <CardDosSpeakers
                                empresa={
                                    "https://api.typeform.com/responses/files/61b24b5397ab827277e43fb88740a77d99726b82bc0181e6e11275ca41ce3d12/master_logo_gaia_1200x1200__1_.jpg"
                                }
                                horarios={"17.30 a 18.00 (Arg.)-15.30 a 16.00 (Méx.)"}
                                img={
                                    "url('https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/gaia%201.jpg?alt=media&token=85747b20-c2a9-4b97-80f1-82b7a9a6a237')"
                                }
                                imgDos={
                                    "url('https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/gaia%202.png?alt=media&token=6fb9bd4f-6d6d-46a3-a813-dab27cac4edd')"
                                }
                                nombre={"Cecilia Ruiz y Sofía Camacho"}
                                puesto={"CEO - Atracción y planeación de Talento"}
                            />
                        </SimpleGrid>
                    </Stack>
                </Container>
            </Stack>
        </Stack>
    );
};

export default Speakers;
