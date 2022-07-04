import React from "react";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

import Form from "./Form";
import "../styles/form.css";

const ContainerRegistration = () => {
    return (
        <Stack bgColor={"brand.200"} justifyContent={"center"} minW={"100%"} position={"relative"}>
            <Flex height={"850px"} position={"absolute"} right={"0px"} top={"0px"} w={"40%"}>
                <Image
                    boxSize={"100%"}
                    objectFit={"cover"}
                    src={
                        "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/imgInscripcion.png?alt=media&token=05c67ecc-153d-460d-a0d3-daeb72e46716"
                    }
                />
            </Flex>
            <Stack p={{ base: "6", md: "24" }}>
                <Text color={"brand.100"} textStyle={"h1"}>
                    save the date
                </Text>
                <Text color={"brand.100"} textStyle={"h2"} w={"60%"}>
                    DESDE EL MIÉRCOLES 27 AL JUEVES 28 DE JULIO
                </Text>
            </Stack>
            <Stack alignItems={"center"} p={6} zIndex={1}>
                <Form />
            </Stack>
            <Stack
                bgColor={"brand.100"}
                bottom={"0px"}
                height={"50%"}
                position={"absolute"}
                right={"0px"}
                w={"100%"}
            />
        </Stack>
    );
};

export default ContainerRegistration;
