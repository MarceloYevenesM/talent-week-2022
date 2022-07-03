import { Box, Container, Image, Stack, Text } from "@chakra-ui/react";

const CardSpeaker = ({ img, nombre, empresa, horarios }) => {
    return (
        <Container
            as={"contenedor"}
            bgColor={"green.500"}
            left={"20px"}
            maxH={"100%"}
            maxW={"100%"}
            position={"relative"}
        >
            <Stack
                alignItems={"center"}
                bgColor={"brand.200"}
                borderColor={"brand.100"}
                borderWidth={{ base: "0.35rem", md: ".5rem" }}
                boxShadow={{ base: "mobileN", md: "desktopN" }}
                height={{ base: "200px", md: "300px" }}
                justifyContent={"center"}
                p={1}
                width={{ base: "200px", md: "300px" }}
            // maxH={{ base: "100px", md: "250px" }}
            // w={{ base: "100px", md: "250px" }}
            >
                <Stack
                    alignItems={"center"}
                    bgColor={"brand.100"}
                    borderColor={"brand.200"}
                    borderWidth={{ base: "0.2rem", md: ".5rem" }}
                    position={"absolute"}
                    top={"-30px"}
                    width={"50%"}
                >
                    <Text
                        color={"brand.200"}
                        fontWeight={"black"}
                        p={2}
                        textAlign={"center"}
                        textStyle={"p2"}
                        textTransform={"uppercase"}
                    >
                        {nombre}
                    </Text>
                </Stack>
                <Stack
                    bgPosition={"center"}
                    bgSize={"cover"}
                    height={"100%"}
                    position={"absolute"}
                    width={"100%"}
                />
                <Stack
                    alignItems={"center"}
                    bgColor={"brand.200"}
                    borderColor={"brand.100"}
                    borderWidth={{ base: "0.2rem", md: ".5rem" }}
                    bottom={"-25px"}
                    p={{ base: "1", md: "2" }}
                    position={"absolute"}
                    right={"0px"}
                    width={{ base: "200px", md: "80%" }}
                >
                    <Image h={{ base: "50px", md: "40px" }} src={empresa} w={"auto"} />
                    <Text
                        color={"brand.100"}
                        fontWeight={"black"}
                        p={2}
                        textAlign={"center"}
                        textStyle={"p2"}
                    >
                        {horarios}
                    </Text>
                </Stack>
            </Stack>
        </Container>
    );
};

export default CardSpeaker;
