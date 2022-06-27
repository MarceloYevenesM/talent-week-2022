import { Link, Stack } from "@chakra-ui/react";

const NavItem = ({ nombre, link }) => {
    return (
        <Stack textStyle={"p"}>
            <Link href={link}>{nombre}</Link>
        </Stack>
    );
};

export default NavItem;
