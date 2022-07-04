import { Box, Container, Image, Stack, Text } from "@chakra-ui/react";

const CardSpeaker = ({ img, nombre, empresa, horarios }) => {
    return (
        <Container
            as={"contenedor"}
            bgColor={"green.500"}
            display={"flex"}
            justifyContent={"center"}
            maxH={"100%"}
            maxW={"100%"}
            padding={6}
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
                left={{ base: "50%", md: "25%" }}
                p={1}
                width={{ base: "200px", md: "200px" }}
            >
                <Stack
                    // bgImage={img}
                    bgPosition={"center"}
                    bgSize={"cover"}
                    height={"100%"}
                    position={"absolute"}
                    width={"100%"}
                />
            </Stack>

            <Stack
                alignItems={"center"}
                bgColor={"brand.100"}
                borderColor={"brand.200"}
                borderWidth={{ base: "0.2rem", md: ".5rem" }}
                left={"0px"}
                position={"absolute"}
                top={"0px"}
                width={"70%"}
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
                alignItems={"center"}
                bgColor={"brand.200"}
                borderColor={"brand.100"}
                borderWidth={{ base: "0.2rem", md: ".5rem" }}
                bottom={"-20px"}
                boxShadow={{ base: "mobileN", md: "desktopN" }}
                p={{ base: "1", md: "2" }}
                position={"absolute"}
                right={"0px"}
                width={{ base: "200px", md: "50%" }}
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
        </Container>
    );
};

export default CardSpeaker;
