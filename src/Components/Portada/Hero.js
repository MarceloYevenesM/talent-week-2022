import { Button, Icon, Image, Stack, Text, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsExclamationTriangleFill } from "react-icons/bs";

const Hero = () => {
    return (
        <Container
            as={"parent"}
            direction={{ base: "column", md: "row" }}
            h={{ base: "115vh", md: "80vh" }}
            maxW={"100vw"}
            paddingBottom={16}
            paddingInline={{ base: "6", md: "24" }}
            paddingTop={16}
            position={"relative"}
        >
            {/* IMAGEN FONDO */}
            <Image
                boxSize={"520px"}
                display={{ base: "none", md: "block" }}
                p={6}
                position={"absolute"}
                right={"23%"}
                src="https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/circulo'logo.png?alt=media&token=e891fc71-4c1f-4a83-b343-71be280434ae"
                top={"0px"}
            />

            {/* TITULO */}
            <Stack
                left={{ base: "0px", md: "16%" }}
                p={6}
                position={"absolute"}
                top={{ base: "0px", md: "0px" }}
                w={{ base: "90%", md: "35%" }}
            >
                <Stack
                    animate={{ translateX: "0px" }}
                    as={motion.div}
                    bgColor={"brand.300"}
                    border={{ base: "borderMobile", md: "border" }}
                    borderColor={"brand.100"}
                    boxShadow={{ base: "mobile", md: "desktop" }}
                    color={"brand.100"}
                    initial={{ translateX: "-1000px" }}
                    padding={2}
                    transition={{ duration: 1 }}
                    zIndex={1}
                >
                    <Text noOfLines={2} textStyle={"h1"}>
                        descubri tu futuro profesional
                    </Text>
                </Stack>
            </Stack>

            {/* TEXTO UNO */}
            <Stack alignItems={{ base: "flex-end", md: "center" }} width={"100%"}>
                <Stack
                    bgColor={"brand.100"}
                    border={{ base: "borderMobile", md: "border" }}
                    borderColor={"brand.200"}
                    boxShadow={{ base: "mobile", md: "desktop" }}
                    height={{ base: "70vh", md: "50vh" }}
                    justifyContent={{ base: "center", md: "flex-end" }}
                    position={"relative"}
                    top={{ base: "10px", md: "50px" }}
                    width={{ base: "80vw", sm: "40vw" }}
                >
                    <Stack
                        justifyContent={"flex-end"}
                        p={{ base: "6", md: "12" }}
                        position={"absolute"}
                        spacing={12}
                    >
                        <Text
                            fontSize={{ base: "1.6rem", md: "2rem" }}
                            textAlign={"justify"}
                            textStyle={"p"}
                            w={{ base: "95%", md: "65%" }}
                        >
                            ¡Súmate a nuestro primer evento sobre talento digital y empleabilidad
                            100% online para la comunidad de Coderhouse en Latinoamérica!
                        </Text>
                        <Button size={"xl"} variant={"coder-house"} w={{ base: "90%", md: "40%" }}>
                            Inscribite acá
                        </Button>
                    </Stack>
                </Stack>
            </Stack>

            {/* TEXTO DOS */}
            <Stack
                bottom={"0px"}
                left={{ base: "0px", md: "55%" }}
                marginBottom={{ base: "0px", md: "10px" }}
                p={{ base: "6", md: "10" }}
                position={"absolute"}
                w={{ base: "90%", md: "25%" }}
            >
                <Stack
                    animate={{ translateX: "0px" }}
                    as={motion.div}
                    bgColor={"brand.100"}
                    border={{ base: "borderMobile", md: "border" }}
                    borderColor={"brand.200"}
                    boxShadow={{ base: "mobile", md: "desktop" }}
                    initial={{ translateX: "1000px" }}
                    transition={{ duration: 1 }}
                >
                    <Stack
                        alignItems={"center"}
                        direction={{ base: "column", md: "row" }}
                        justifyContent={"center"}
                        p={{ base: "6", md: "12" }}
                        spacing={12}
                    >
                        <Icon as={BsExclamationTriangleFill} h={"80px"} w={"80px"} />
                        <Text textAlign={"justify"} textStyle={"p"}>
                            Si eres <strong>estudiante o graduado de coderhouse, </strong>podras
                            entrar en contacto con más de...
                            <strong> empresas líderes en tecnología.</strong>
                        </Text>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Hero;

// <Container
//     as="contenedor"
//     maxWidth="100%"
//     paddingBottom={24}
//     paddingLeft={{ base: "6", md: "24" }}
//     paddingRight={{ base: "6", md: "24" }}
// >
//     <Container height={"70vh"} maxW="100%">
//         <Stack
//             alignItems={"center"}
//             direction={{ base: "column", md: "row" }}
//             justifyContent={"center"}
//             marginBlock={6}
//             position={{"relative"}}
//         >
//             <Stack
//                 animate={{ translateX: 0 }}
//                 as={motion.div}
//                 bgColor={"brand.300"}
//                 border={"4px"}
//                 borderColor={"brand.100"}
//                 boxShadow={{ base: "mobile", md: "desktop" }}
//                 initial={{ translateX: -1000 }}
//                 left={{ base: "0px", md: "150px" }}
//                 maxWidth={"450px"}
//                 padding={2}
//                 position={"absolute"}
//                 transition=".25s ease-in-out"
//                 zIndex={2}
//             >
//                 <Text color={"brand.100"} noOfLines={2} textStyle={"h1"}>
//                     descubri tu futuro profesional
//                 </Text>
//             </Stack>
//             <Stack
//                 alignItems={"flex-start"}
//                 animate={{ opacity: 1 }}
//                 as={motion.div}
//                 bgColor={"brand.100"}
//                 border={"4px"}
//                 borderColor={"brand.200"}
//                 boxShadow={{ base: "mobile", md: "desktop" }}
//                 initial={{ opacity: 0 }}
//                 justifyContent={{ base: "center", md: "flex-end" }}
//                 maxWidth={"550px"}
//                 minHeight={"450px"}
//                 position={"absolute"}
//                 top={"50px"}
//                 transition=".25s ease-in-out"
//                 width={"100%"}
//                 zIndex={1}
//             >
//                 <Stack maxW={"400px"} padding={12} spacing={24}>
//                     <Text
//                         fontSize={{ base: "1.6rem", md: "2rem" }}
//                         textStyle={"p"}
//                         width={"100%"}
//                     >
//                         ¡Súmate a nuestro primer evento sobre talento digital y
//                         empleabilidad 100% online para la comunidad de Coderhouse en
//                         Latinoamérica!
//                     </Text>
//                     <Stack width={"200px"}>
//                         <Button size={"xl"} variant={"coder-house"}>
//                             Inscribite acá
//                         </Button>
//                     </Stack>
//                 </Stack>
//             </Stack>
//             <Stack
//                 animate={{ translateX: 0 }}
//                 as={motion.div}
//                 bgColor={"brand.100"}
//                 border={"4px"}
//                 borderColor={"brand.200"}
//                 boxShadow={{ base: "mobile", md: "desktop" }}
//                 initial={{ translateX: 1000 }}
//                 justifyContent={"center"}
//                 maxH={"300px"}
//                 maxW={"400px"}
//                 position={"absolute"}
//                 right={{ base: "0px", md: "150px" }}
//                 top={{ base: "450px", md: "350px" }}
//                 transition=".25s ease-in-out"
//                 zIndex={1}
//             >
//                 <Stack
//                     alignItems={"center"}
//                     direction={{ base: "column", md: "row" }}
//                     justifyContent={"center"}
//                     p={6}
//                     spacing={12}
//                 >
//                     <Icon as={BsExclamationTriangleFill} h={"70px"} w={"70px"} />
//                     <Text fontSize={{ base: "1.6rem", md: "2rem" }} textStyle={"p"}>
//                         Si eres <strong>estudiante o graduado de coderhouse, </strong>
//                         podras entrar en contacto con más de...
//                         <strong>empresas líderes en tecnología.</strong>
//                     </Text>
//                 </Stack>
//             </Stack>
//             <Image
//                 animate={{ opacity: 1 }}
//                 as={motion.img}
//                 boxSize={"500px"}
//                 display={{ base: "none", md: "block" }}
//                 initial={{ opacity: 0 }}
//                 p={6}
//                 position={"absolute"}
//                 right={"300px"}
//                 src="https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/circulo'logo.png?alt=media&token=e891fc71-4c1f-4a83-b343-71be280434ae"
//                 transition="3s ease-in-out"
//             />
//         </Stack>
//     </Container>
// </Container>
