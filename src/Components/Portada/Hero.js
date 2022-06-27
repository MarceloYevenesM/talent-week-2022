import { Button, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <Stack padding={24}>
            <Stack
                as={motion.div}
                bgColor={"brand.300"}
                borderColor={"brand.100"}
                borderWidth={"5px"}
                boxShadow={"12px 12px 0px rgba(255, 255, 255, 1)"}
                width={"500px"}
            >
                <Text color={"brand.100"} padding={(0, 6)} textStyle={"h1"}>
                    descubre tu futuro profesional
                </Text>
            </Stack>
            <Stack>
                <Text textStyle={"p"}>
                    ¡Súmate a nuestro primer evento sobre talento digital y empleabilidad 100%
                    online para la comunidad de Coderhouse en Latinoamérica!
                </Text>
                <Button>Inscribite acá</Button>
            </Stack>
            <Text textStyle={"h2"}>DESDE EL MIERCOLES AL JUEVES</Text>;
        </Stack>
    );
};

export default Hero;
