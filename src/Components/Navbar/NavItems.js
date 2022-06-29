import { Stack } from "@chakra-ui/react";

import NavItem from "./NavItem";
const NavItems = () => {
    return (
        <>
            <NavItem link="/" nombre="Inscripcion" />
            <NavItem link="/" nombre="Agenda" />
            <NavItem link="/" nombre="Date a conocer" />
            <NavItem link="/" nombre="Empresas" />
        </>
    );
};

export default NavItems;
