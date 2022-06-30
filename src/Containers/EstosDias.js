import { Stack, Text, Grid, GridItem, Container, Image } from "@chakra-ui/react";

import CardEstosDias from "../Components/EstosDias/CardEstosDias";
const EstosDias = () => {
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
                    <Stack>
                        <Text color={"brand.100"} textStyle={"h1"}>
                            durante estos días podrás:
                        </Text>
                    </Stack>
                    <Grid
                        bgColor={"green.500"}
                        gap={{ base: "12", md: "24" }}
                        marginTop={["2rem", "4rem"]}
                        templateColumns={"repeat(1, auto)"}
                    >
                        <CardEstosDias
                            img={
                                "url('https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')"
                            }
                            left={{ base: "100px", md: "500px" }}
                            texto={"PRIMERA CARD"}
                        />
                        <CardEstosDias
                            img={
                                "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
                            }
                            position={"0px"}
                            right={"100px"}
                            texto={"SEGUNDA CARD"}
                        />
                        <CardEstosDias
                            img={
                                "url('https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
                            }
                            left={{ base: "100px", md: "500px" }}
                            texto={"TERCERA CARD"}
                        />
                    </Grid>
                </Container>
            </Stack>
        </Stack>
    );
};

export default EstosDias;
