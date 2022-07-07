import { GridItem, Stack, Text } from "@chakra-ui/react";

const CardEstosDias = ({ img, texto, position, left, right }) => {
    return (
        <GridItem
            alignItems={"center"}
            left={position}
            minH={{ base: "150px", md: "350px" }}
            position={"relative"}
        >
            <Stack
                bgColor={"brand.200"}
                borderColor={"brand.100"}
                borderWidth={{ base: "0.35rem", md: ".5rem" }}
                boxShadow={{ base: "mobileN", md: "desktopN" }}
                minH={{ base: "150px", md: "350px" }}
                p={2}
                position={"absolute"}
                right={position}
                w={{ base: "60%", md: "45%" }}
            >
                <Stack
                    bgImage={img}
                    bgPosition={"center"}
                    bgSize={"cover"}
                    minH={{ base: "150px", md: "350px" }}
                />
            </Stack>
            <Stack
                alignItems={"center"}
                bgColor={"brand.200"}
                borderColor={"brand.100"}
                borderWidth={{ base: "0.35rem", md: ".5rem" }}
                boxShadow={{ base: "mobileN", md: "desktopN" }}
                justifyContent={"center"}
                left={left}
                maxW={"500px"}
                position={"absolute"}
                right={right}
                top={"50%"}
                zIndex={1}
            >
                <Text
                    color={"brand.100"}
                    fontWeight={"black"}
                    p={{ base: "2", md: "6" }}
                    textAlign={"center"}
                    textStyle={"p2"}
                    textTransform={"uppercase"}
                >
                    {texto}
                </Text>
            </Stack>
        </GridItem>
    );
};

export default CardEstosDias;
