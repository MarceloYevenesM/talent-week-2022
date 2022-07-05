import { Button, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ApplyCompanies = () => {
    return (
        <Stack
            bgColor={"brand.200"}
            maxW={"100%"}
            minH={{ base: "100%", md: "90%" }}
            position={"relative"}
        >
            <Stack bgColor={"brand.100"} h={"100%"} width="100%">
                <Stack height={{ base: "450px", md: "300px" }} position={"relative"}>
                    <Stack
                        bgImage={
                            "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/dateImagen.png?alt=media&token=84b5b666-3a38-473e-beb2-e5c75c1bbb86"
                        }
                        bgPosition={"right"}
                        bgRepeat={"no-repeat"}
                        bgSize={"cover"}
                        h={"100%"}
                        position={"absolute"}
                        right={"0px"}
                        w={"40%"}
                    />
                    <Stack
                        p={{ base: "6", md: "24" }}
                        spacing={6}
                        w={{ base: "100%", md: "50%" }}
                        zIndex={1}
                    >
                        <Text textStyle={"h1"}>¡date a conocer!</Text>
                        <Text textAlign={"justify"} textStyle={"p"}>
                            Selecciona las empresas que te interesen para compartirles tu perfil y
                            que puedan tenerte en cuenta para oportunidades laborales actuales y
                            futuras.
                        </Text>
                        <Button size={"xl"} variant={"coder-house"} w={{ base: "90%", md: "40%" }}>
                            Aplicar
                        </Button>
                    </Stack>
                    <Stack
                        bgColor={"red.500"}
                        bgImage={
                            "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/dateImagen2.png?alt=media&token=fe68ce26-758a-4ef2-9782-1ecc0cbfd239"
                        }
                        bgPosition={"left"}
                        bgRepeat={"no-repeat"}
                        bgSize={"cover"}
                        borderColor={"brand.100"}
                        borderWidth={{ base: ".35rem", md: ".5rem" }}
                        bottom={{ base: "-90px", md: "-300px" }}
                        boxShadow={{ base: "mobileN", md: "desktopN" }}
                        h={{ base: "40%", md: "120%" }}
                        position={"absolute"}
                        right={{ base: "10%", md: "30%" }}
                        w={{ base: "80%", md: "40%" }}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ApplyCompanies;

{
    /* <Grid
                    height="90rem"
                    templateColumns="repeat(20, 1fr)"
                    templateRows="63rem 1fr"
                    width="100%"
                >
                    <GridItem bg="#131313" gridColumnEnd="16" gridColumnStart="1" rowStart="1">
                        <Box height="70%">
                            <Flex
                                direction="column"
                                height="100%"
                                justify="space-evenly"
                                marginInlineStart="5%"
                                width="60%"
                            >
                                <Text color="#FFF" fontSize="3.75rem" textTransform="uppercase">
                                    ¡date a conocer!
                                </Text>
                                <Text color="#FFF" fontSize="2rem" textTransform="uppercase">
                                    Selecciona las empresas que te interesen para compartirles tu perfil y
                                    que puedan tenerte en cuenta para oportunidades laborales actuales y
                                    futuras.
                                </Text>
                                <Button fontSize="1.125rem" width="40%">
                                    Aplicar
                                </Button>
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem
                        backgroundImage={side}
                        backgroundRepeat="no-repeat"
                        gridColumnEnd="21"
                        gridColumnStart="15"
                        objectFit="cover"
                        objectPosition="center"
                        rowStart="1"
                    />
                
                    <GridItem
                        bg="yellow"
                        gridColumnEnd="15"
                        gridColumnStart="7"
                        position="relative"
                        rowStart="2"
                    >
                        <Image
                            alt="sobre-nosotros"
                            height="auto"
                            objectFit="cover"
                            position="absolute"
                            src={about}
                            top="-10rem"
                            width="100%"
                        />
                    </GridItem>
                </Grid> */
}
