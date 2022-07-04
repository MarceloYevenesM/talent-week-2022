import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import about from "../assets/imgSobre.png";
import side from "../assets/imageSide.png";

const ApplyCompanies = () => {
  return (
    <Grid
      templateColumns="repeat(20, 1fr)"
      templateRows="63rem 1fr"
      width="100%"
      height="90rem"
    >
      <GridItem
        rowStart="1"
        gridColumnStart="1"
        gridColumnEnd="16"
        bg="#131313"
      >
        <Box height="70%">
          <Flex
            direction="column"
            width="60%"
            height="100%"
            justify="space-evenly"
            marginInlineStart="5%"
          >
            <Text textTransform="uppercase" color="#FFF" fontSize="3.75rem">
              ¡date a conocer!
            </Text>
            <Text textTransform="uppercase" color="#FFF" fontSize="2rem">
              Selecciona las empresas que te interesen para compartirles tu
              perfil y que puedan tenerte en cuenta para oportunidades laborales
              actuales y futuras.
            </Text>
            <Button width="40%" fontSize="1.125rem">Aplicar</Button>
          </Flex>
        </Box>
      </GridItem>
      <GridItem
        rowStart="1"
        gridColumnStart="15"
        gridColumnEnd="21"
        backgroundImage={side}
        objectFit="cover"
        objectPosition="center"
        backgroundRepeat="no-repeat"
      ></GridItem>

      <GridItem
        rowStart="2"
        gridColumnStart="7"
        gridColumnEnd="15"
        bg="yellow"
        position="relative"
      >
        <Image
          src={about}
          alt="sobre-nosotros"
          objectFit="cover"
          position="absolute"
          top="-10rem"
          width="100%"
          height="auto"
        />
      </GridItem>
    </Grid>
  );
};

export default ApplyCompanies;
