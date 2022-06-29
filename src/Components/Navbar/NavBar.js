import { Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

import NavLogo from "./NavLogo";
import NavItems from "./NavItems";
import MenuToggle from "./MenuToggle";

const variants = {
    open: { x: "-100%" },
    closed: { x: "0%" },
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            paddingBlock={6}
            paddingInline={{ base: "6", md: "24" }}
            w={"100%"}
        >
            <Stack
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
                spacing={{ base: "0", md: "10" }}
            >
                <Link display={{ base: "none", md: "flex" }} href="/">
                    <NavLogo />
                </Link>
                <Text display={{ base: "flex", md: "none", lg: "flex" }} textStyle={"h1"}>
                    talentweek
                </Text>
            </Stack>
            <MenuToggle onOpen={onOpen} />
            <Stack
                alignItems={"flex-end"}
                animate={isOpen ? "open" : "closed"}
                as={motion.div}
                bgColor={"brand.100"}
                height={"100%"}
                justifyContent={"flex-start"}
                p={6}
                position={"absolute"}
                right={"0px"}
                top={"80px"}
                variants={variants}
                width={"100%"}
                zIndex={10}
            >
                <NavItems />
            </Stack>
            <Stack direction={"row"} display={{ base: "none", md: "flex" }} spacing={6}>
                <NavItems />
            </Stack>
        </Stack>
    );
};

export default NavBar;
