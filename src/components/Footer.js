import { Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import logoTw from "../assets/Logo-TW.png";
import textTW from "../assets/talent-week.png";
import logoCoder from "../assets/logo-coder.png";
import SocialNetworks from "./SocialNetworks";

const Footer = () => {
  return (
    <footer>
      <Flex
        w="100%"
        h={{ base: "700", md: "320" }}
        bgColor="#131313"
        justify="space-around"
        alignItems="center"
        wrap="wrap"
      >
        <div className="footer">
          <Flex w="100%" justify="space-around" alignItems="center" wrap="wrap">
            <Grid
              w="233px"
              h="224.2px"
              templateRows="25% 1fr"
              templateColumns="25% 1fr"
              gap={1}
            >
              <GridItem rowSpan={1} colSpan={1}>
                <Flex w="100%" h="100%" justify="center" alignItems="center">
                  <Image w="48px" h="46px" src={logoTw} alt="Logo TW" />
                </Flex>
              </GridItem>

              <GridItem rowSpan={1} colSpan={1}>
                <Flex w="100%" h="100%" justify="center" alignItems="center">
                  <Image w="156px" h="26px" src={textTW} alt="Text TW" />
                </Flex>
              </GridItem>

              <GridItem colStart={2} rowStart={2}>
                <Grid w="100%" h="100%">
                  <a href="#">Inscripcion</a>
                  <a href="#">Agenda</a>
                  <a href="#">Date a conocer</a>
                  <a href="#">Empresas</a>
                </Grid>
              </GridItem>
            </Grid>

            <Grid
              w="233px"
              h="224.2px"
              templateRows="25% 1fr"
              templateColumns="1fr"
              gap={1}
            >
              <GridItem rowSpan={1} colSpan={1}>
                <Flex w="100%" h="100%" justify="center" alignItems="center">
                  <Image
                    w="227px"
                    h="42px"
                    src={logoCoder}
                    alt="Logo CoderHouse"
                    className="logoCoderHouse"
                  />
                </Flex>
              </GridItem>

              <GridItem colStart={1} rowStart={2}>
                <Grid w="100%" h="100%" templateRows="1fr 1fr 1fr 1fr">
                  <a href="#">Nosotros</a>
                  <a href="#">Comunidad</a>
                  <a href="#">Contacto</a>
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
