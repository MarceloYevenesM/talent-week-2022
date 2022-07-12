import React from "react";
import { Stack, Text } from "@chakra-ui/react";

import SocialNetworks from "./SocialNetworks";
import NavItems from "./Navbar/NavItems";
import NavLogo from "./Navbar/NavLogo";
import NavItem from "./Navbar/NavItem";

const Footer = () => {
    return (
        <Stack alignItems={"center"} paddingBottom={10}>
            <Stack
                alignItems={{ base: "flex-start", md: "center" }}
                bgColor={"brand.100"}
                direction={{ base: "column", md: "row" }}
                justifyContent={{ base: "center", md: "space-between" }}
                p={{ base: "6", md: "24" }}
                spacing={{ base: "24", md: "6" }}
                w={"100%"}
            >
                <Stack spacing={12}>
                    <Stack alignItems={"center"} direction={"row"} spacing={6}>
                        <NavLogo />
                        <Text color={"brand.200"} textStyle={"h1"}>
                            talentweek
                        </Text>
                    </Stack>
                    <Stack>
                        <NavItems />
                    </Stack>
                </Stack>
                <Stack spacing={12}>
                    <Stack direction={"row"} spacing={6} w={"100%"}>
                        <Text color={"brand.200"} textStyle={"h1"}>
                            coderhouse
                        </Text>
                    </Stack>
                    <Stack>
                        <NavItem link="/" nombre="Nosotros" />
                        <NavItem link="/" nombre="Comunidad" />
                        <NavItem link="/" nombre="Contacto" />
                    </Stack>
                </Stack>

                <Stack w={{ base: "100%", md: "20%" }}>
                    <SocialNetworks />
                </Stack>
            </Stack>
            <div className="text">
                <Text color={"brand.200"} p={2} textAlign={"center"} textStyle={"p"}>
                    © Copyright 2021 - Todos los derechos reservados
                </Text>
            </div>
        </Stack>
    );
};

export default Footer;
