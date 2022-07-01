import { Container, Stack, Text } from "@chakra-ui/react";

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
                        border={"4px solid"}
                        borderColor={"brand.100"}
                        boxShadow={{ base: "mobileN", md: "desktopN" }}
                        w={"20%"}
                    >
                        <Text color={"brand.100"} p={2} textAlign={"center"} textStyle={"h1"}>
                            speakers
                        </Text>
                    </Stack>
                </Container>
            </Stack>
        </Stack>
    );
};

export default Speakers;
