import { Image, Stack } from "@chakra-ui/react";

const MenuToggle = ({ onOpen }) => {
    return (
        <Stack
            display={{ base: "flex", md: "none" }}
            h={"50px"}
            w={"50px"}
            zIndex={1}
            onClick={() => onOpen()}
        >
            <Image
                boxSize={"100%"}
                src="https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/toggle_menu_svg.svg?alt=media&token=4af2e451-3fbd-4766-bad9-f986e3e3ebd5"
            />
        </Stack>
    );
};

export default MenuToggle;
