import { Link, Stack } from "@chakra-ui/react";

const NavItem = ({ nombre, link }) => {
    return (
        <Stack fontWeight={"bold"} textStyle={"p"}>
            <Link href={link}>{nombre}</Link>
        </Stack>
    );
};

export default NavItem;
