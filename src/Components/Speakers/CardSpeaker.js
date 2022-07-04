import { Container, Stack, Text } from "@chakra-ui/react";

const CardSpeaker = ({ img, nombre, empresa, horarios, puesto, size }) => {
    return (
        <Container
            // bgColor={"green.500"}
            display={"flex"}
            justifyContent={"space-around"}
            maxW={"100%"}
            minHeight={"250px"}
            p={6}
            position={"relative"}
        >
            {/* NOMBRE SPEAKER */}
            <Stack
                bgColor={"brand.100"}
                borderColor={"brand.200"}
                borderWidth={{ base: "0.1rem", md: ".3rem" }}
                left={"0"}
                p={1}
                position={"absolute"}
                top={"0"}
                w={"65%"}
                zIndex={"1"}
            >
                <Text textAlign={"center"} textStyle={"p2"} textTransform={"uppercase"}>
                    {nombre}
                </Text>
            </Stack>

            {/* IMAGEN SPEAKER */}
            <Stack
                alignItems={"center"}
                bgColor={"brand.200"}
                borderColor={"brand.100"}
                borderWidth={{ base: "0.35rem", md: ".5rem" }}
                boxShadow={{ base: "mobileN", md: "desktopN" }}
                height={{ base: "150px", md: "250px" }}
                minH={"100%"}
                p={1}
                w={{ base: "80%", md: "65%" }}
            >
                <Stack
                    bgImage={img}
                    bgPosition={"top"}
                    bgSize={"cover"}
                    height={"100%"}
                    width={"100%"}
                />
            </Stack>

            {/* INFO */}
            <Stack
                bgColor={"brand.200"}
                borderColor={"brand.100"}
                borderWidth={{ base: "0.2rem", md: ".5rem" }}
                bottom={{ base: "-100px", md: "-50px" }}
                boxShadow={{ base: "mobileN", md: "desktopN" }}
                h={{ base: "65%", md: "45%" }}
                justifyContent={"center"}
                padding={2}
                position={"absolute"}
                right={"0"}
                w={"70%"}
            >
                <Stack
                    alignItems={"center"}
                    bgImage={empresa}
                    bgPosition={"center"}
                    bgRepeat={"no-repeat"}
                    bgSize={{ base: "80px", md: `${size}` }}
                    height={"50%"}
                    w={"auto"}
                />
                <Text
                    color={"brand.100"}
                    fontStyle={"italic"}
                    fontWeight={"black"}
                    textAlign={"center"}
                    textStyle={"info"}
                >
                    {horarios}
                </Text>
                <Text color={"brand.100"} textAlign={"center"} textStyle={"info"}>
                    {puesto}
                </Text>
            </Stack>
        </Container>
    );
};

export default CardSpeaker;
