import { Link, Stack, Text } from "@chakra-ui/react";

import NavLogo from "./NavLogo";
import NavItem from "./NavItem";

const NavBar = () => {
    return (
        <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            padding={(0, 24)}
            paddingTop={12}
        >
            <Stack alignItems={"center"} direction={"row"} spacing={10}>
                <Link href="/">
                    <NavLogo />
                </Link>
                <Text textStyle={"h1"}>talentweek</Text>
            </Stack>
            <Stack direction={"row"} spacing={6}>
                <NavItem link="/" nombre="Inscripcion" />
                <NavItem link="/" nombre="Agenda" />
                <NavItem link="/" nombre="Date a conocer" />
                <NavItem link="/" nombre="Empresas" />
            </Stack>
        </Stack>
    );
};

export default NavBar;
