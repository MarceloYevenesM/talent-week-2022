import React from "react";
import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import logoTw from "../assets/Logo-TW.png";
import textTW from "../assets/talent-week.png";
import logoCoder from "../assets/logo-coder.png";

import SocialNetworks from "./SocialNetworks";

const Footer = () => {
    return (
        <footer>
            <Flex
                alignItems="center"
                bgColor="#131313"
                h={{ base: "700px", md: "400px", lg: "320px" }}
                justify="space-around"
                w="100%"
                wrap="wrap"
            >
                <div className="footer">
                    <Flex alignItems="center" justify="space-around" w="100%" wrap="wrap">
                        <Grid
                            gap={1}
                            h="224.2px"
                            templateColumns="25% 1fr"
                            templateRows="25% 1fr"
                            w="233px"
                        >
                            <GridItem colSpan={1} rowSpan={1}>
                                <Flex alignItems="center" h="100%" justify="center" w="100%">
                                    <Image alt="Logo TW" h="46px" src={logoTw} w="48px" />
                                </Flex>
                            </GridItem>

                            <GridItem colSpan={1} rowSpan={1}>
                                <Flex alignItems="center" h="100%" justify="center" w="100%">
                                    <Image alt="Text TW" h="26px" src={textTW} w="156px" />
                                </Flex>
                            </GridItem>

                            <GridItem colStart={2} rowStart={2}>
                                <Grid h="100%" w="100%">
                                    <a href="/#">Inscripcion</a>
                                    <a href="/#">Agenda</a>
                                    <a href="/#">Date a conocer</a>
                                    <a href="/#">Empresas</a>
                                </Grid>
                            </GridItem>
                        </Grid>

                        <Grid
                            gap={1}
                            h="224.2px"
                            templateColumns="1fr"
                            templateRows="25% 1fr"
                            w="233px"
                        >
                            <GridItem colSpan={1} rowSpan={1}>
                                <Flex alignItems="center" h="100%" justify="center" w="100%">
                                    <Image
                                        alt="Logo CoderHouse"
                                        className="logoCoderHouse"
                                        h="42px"
                                        src={logoCoder}
                                        w="227px"
                                    />
                                </Flex>
                            </GridItem>

                            <GridItem colStart={1} rowStart={2}>
                                <Grid h="100%" templateRows="1fr 1fr 1fr 1fr" w="100%">
                                    <a href="/#">
                                        <Text textStyle={"p"}> Nosotros</Text>
                                    </a>
                                    <a href="/#">Comunidad</a>
                                    <a href="/#">Contacto</a>
                                </Grid>
                            </GridItem>
                        </Grid>

                        <SocialNetworks />
                    </Flex>
                </div>
                <div className="text">
                    <label>© Copyright 2021 - Todos los derechos reservados</label>
                </div>
            </Flex>
        </footer>
    );
};

export default Footer;
