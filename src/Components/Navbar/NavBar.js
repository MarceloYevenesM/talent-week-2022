import { Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NavLogo from "./NavLogo";
import NavItems from "./NavItems";
import MenuToggle from "./MenuToggle";

const NavBar = () => {
    const close =
        "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/close_toggle_menu_svg.svg?alt=media&token=ee686e56-3484-48ed-89e5-1247cb7750bc";
    const open =
        "https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/toggle_menu_svg.svg?alt=media&token=4af2e451-3fbd-4766-bad9-f986e3e3ebd5";

    const [isOpen, setIsOpen] = useState(false);
    const [display, setDisplay] = useState(false);
    const onOpen = () => {
        setIsOpen(!isOpen);
        setDisplay(!display);
    };

    const variants = {
        open: { opacity: 1, x: "0" },
        closed: { opacity: 0, x: "-100%" },
    };

    return (
        <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            overflow={"hidden"}
            paddingBlock={6}
            paddingInline={{ base: "6", md: "24" }}
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
                <Text
                    color={"brand.200"}
                    display={{ base: "flex", md: "none", lg: "flex" }}
                    textStyle={"h1"}
                >
                    talentweek
                </Text>
            </Stack>
            <MenuToggle icon={isOpen ? close : open} onOpen={onOpen} />
            <AnimatePresence>
                <Stack
                    alignItems={"flex-start"}
                    animate={isOpen ? "open" : "closed"}
                    as={motion.div}
                    bgColor={"brand.100"}
                    display={display ? "flex" : "none"}
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
            </AnimatePresence>
            <Stack direction={"row"} display={{ base: "none", md: "flex" }} spacing={6}>
                <NavItems />
            </Stack>
        </Stack>
    );
};

export default NavBar;
