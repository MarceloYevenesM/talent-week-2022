import { Button, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineExclamation } from "react-icons/ai";

import Banner from "../Banner/Banner";

const Hero = () => {
    return (
        <Stack paddingBottom={24} paddingLeft={24} paddingRight={24}>
            <Stack
                // animate={{ scale: 1 }}
                as={motion.div}
                height={"70vh"}
                // initial={{ scale: 0 }}
                p={12}
            // transition="1s ease-in-out"
            >
                <Stack
                    alignItems={"center"}
                    direction={"row"}
                    height={"100%"}
                    justifyContent={"center"}
                    position={"relative"}
                >
                    <Stack
                        animate={{ translateX: 0 }}
                        as={motion.div}
                        bgColor={"brand.300"}
                        border={"4px"}
                        borderColor={"brand.100"}
                        boxShadow={"12px 12px 0px rgba(255, 255, 255, 1)"}
                        initial={{ translateX: -1000 }}
                        left={"200px"}
                        maxWidth={"450px"}
                        padding={2}
                        position={"absolute"}
                        top={0}
                        transition=".25s ease-in-out"
                        zIndex={2}
                    >
                        <Text color={"brand.100"} noOfLines={2} textStyle={"h1"}>
                            descubri tu futuro profesional
                        </Text>
                    </Stack>
                    <Stack
                        alignItems={"flex-start"}
                        animate={{ scale: 1 }}
                        as={motion.div}
                        bgColor={"brand.100"}
                        border={"4px"}
                        borderColor={"brand.200"}
                        boxShadow={"12px 12px 0px rgba(255, 255, 255, 1)"}
                        height={"350px"}
                        initial={{ scale: 0 }}
                        justifyContent={"flex-end"}
                        maxWidth={"550px"}
                        position={"absolute"}
                        top={"50px"}
                        transition=".5s ease-in-out"
                        width={"100%"}
                        zIndex={1}
                    >
                        <Stack padding={12} spacing={12} w={"400px"}>
                            <Text fontSize="2rem" textStyle={"p"} width={"100%"}>
                                ¡Súmate a nuestro primer evento sobre talento digital y
                                empleabilidad 100% online para la comunidad de Coderhouse en
                                Latinoamérica!
                            </Text>
                            <Stack width={"200px"}>
                                <Button size={"xl"} variant={"coder-house"}>
                                    inscribite acá
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Stack
                            animate={{ translateX: 0 }}
                            as={motion.div}
                            bgColor={"brand.100"}
                            border={"4px"}
                            borderColor={"brand.200"}
                            boxShadow={"12px 12px 0px rgba(255, 255, 255, 1)"}
                            height={"200px"}
                            initial={{ translateX: 1000 }}
                            justifyContent={"center"}
                            position={"absolute"}
                            right={"200px"}
                            top={"300px"}
                            transition=".25s ease-in-out"
                            w={"400px"}
                            zIndex={1}
                        >
                            <Stack
                                alignItems={"center"}
                                direction={"row"}
                                justifyContent={"center"}
                                p={6}
                            >
                                <Icon as={AiOutlineExclamation} h={"100px"} w={"100px"} />
                                <Text fontSize="2rem" textStyle={"p"}>
                                    Si eres <strong>estudiante o graduado de coderhouse, </strong>
                                    podras entrar en contacto con más de...
                                    <strong>empresas líderes en tecnología.</strong>
                                </Text>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Image
                        animate={{ scale: 1 }}
                        as={motion.img}
                        boxSize={"500px"}
                        initial={{ scale: 0 }}
                        position={"absolute"}
                        right={"300px"}
                        src="https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/circulo'logo.png?alt=media&token=e891fc71-4c1f-4a83-b343-71be280434ae"
                        transition=".5s ease-in-out"
                    />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Hero;
