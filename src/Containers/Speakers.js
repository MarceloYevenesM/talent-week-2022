import { Container, Stack, Text, SimpleGrid } from "@chakra-ui/react";

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
                    <Stack marginTop={12} spacing={24}>
                        <DiaItem texto={"miercoles 27 de julio"} />
                    </Stack>
                    <Stack marginTop={12} spacing={24}>
                        <DiaItem texto={"jueves 28 de julio"} />
                        <SimpleGrid bgColor={"blue.500"} minChildWidth={"200px"} spacing={24}>
                            <CardSpeaker
                                empresa={
                                    "  https://api.typeform.com/responses/files/2d176a0214eaa58a7387cc0ee1de6c50b851a223ff7bb58084c7c97b8dfa9f8b/download.png"
                                }
                                horarios={
                                    "14.00 a 14.30 (Arg.) - 12.00 a 12.30 (Méx.)IT Recruiter (México)"
                                }
                                img={
                                    "url(' https://api.typeform.com/responses/files/ec64f64fa1e9373725d384b6a502b2037c4f51ef824c2ac559cde8ba8a19afc3/IMG_20190820_164133__1_.jpg')"
                                }
                                nombre={"Brandon Arreola Saucedo"}
                            />

                            <CardSpeaker
                                empresa={
                                    "https://api.typeform.com/responses/files/4637052376a51daef6600540afcfbcda192adc66fa816727a2fb470bddad5abb/Ual%C3%A1___Imagotipo___Color.png"
                                }
                                horarios={
                                    "14.30 a 15.00 (Arg.) - 12.30 a 13.00 (Méx.) Chief Data & Analytics Officer)"
                                }
                                img={""}
                                nombre={"Pablo Andrés Guzzi"}
                            />
                        </SimpleGrid>
                    </Stack>
                </Container>
            </Stack>
        </Stack>
    );
};

export default Speakers;
