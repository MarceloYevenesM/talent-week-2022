import { Image, Stack } from "@chakra-ui/react";

const MenuToggle = ({ onOpen, icon }) => {
    return (
        <Stack
            display={{ base: "flex", md: "none" }}
            h={"50px"}
            w={"50px"}
            zIndex={1}
            onClick={() => onOpen()}
        >
            <Image boxSize={"100%"} src={icon} />
        </Stack>
    );
};

export default MenuToggle;
