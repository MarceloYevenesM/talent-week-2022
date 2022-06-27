import React from "react";
import { Center, Grid, GridItem, Image } from "@chakra-ui/react";
import logoFacebook from "../assets/icons/Facebook.png";
import logoInstagram from "../assets/icons/Instagram.png";
import logoLinkedin from "../assets/icons/Linkedin.png";
import logoTwitter from "../assets/icons/Twitter.png";
import logoYoutube from "../assets/icons/Youtube.png";

const SocialNetworks = () => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      className="networks"
      gap={10}
      
    >
      <GridItem rowSpan={1} colSpan={5}>
        <Center>
          <label>Seguinos en</label>
        </Center>
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Image w="29.03px" h="29.04px" src={logoFacebook} alt="Logo Facebook" />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Image
          w="29.03px"
          h="29.03px"
          src={logoInstagram}
          alt="Logo Instagram"
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Image
          w="32.25px"
          h="22.17px"
          src={logoYoutube}
          alt="Logo Youtube"
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Image
          w="29.03px"
          h="23.55px"
          src={logoTwitter}
          alt="Logo Twitter"
        />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Image
          w="29.03px"
          h="29.03px"
          src={logoLinkedin}
          alt="Logo Linkedin"
        />
      </GridItem>
    </Grid>
  );
};

export default SocialNetworks;
