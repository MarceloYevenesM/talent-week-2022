import React from "react";
import { Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import logoFacebook from "../assets/icons/Facebook.png";
import logoInstagram from "../assets/icons/Instagram.png";
import logoLinkedin from "../assets/icons/Linkedin.png";
import logoTwitter from "../assets/icons/Twitter.png";
import logoYoutube from "../assets/icons/Youtube.png";

const SocialNetworks = () => {
    return (
        <Grid
            className="networks"
            gap={10}
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(2, 1fr)"
        >
            <GridItem colSpan={5} rowSpan={1}>
                <Center>
                    <Text color={"brand.300"} fontWeight={"black"} textStyle={"p"}>
                        Seguinos en
                    </Text>
                </Center>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Image alt="Logo Facebook" h="29.04px" src={logoFacebook} w="29.03px" />
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Image alt="Logo Instagram" h="29.03px" src={logoInstagram} w="29.03px" />
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Image alt="Logo Youtube" h="22.17px" src={logoYoutube} w="32.25px" />
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Image alt="Logo Twitter" h="23.55px" src={logoTwitter} w="29.03px" />
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Image alt="Logo Linkedin" h="29.03px" src={logoLinkedin} w="29.03px" />
            </GridItem>
        </Grid>
    );
};

export default SocialNetworks;
