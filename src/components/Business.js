import { Box, Image, Stack } from "@chakra-ui/react";

const Business = ({ dark, logo }) => {
    const styles = dark ? "card-business bg-black imgBorder" : "card-business";

    return (
        <Stack
            alignItems={"center"}
            borderColor={"brand.100"}
            borderWidth={{ base: ".35rem", md: ".5rem" }}
            boxShadow={{ base: "mobileN", md: "desktopN" }}
            justifyContent={"center"}
            w={{ base: "100px", md: "200px" }}
        >
            <Stack
                alignItems={"center"}
                h={{ base: "100px", md: "200px" }}
                justifyContent={"center"}
                w={"100%"}
            >
                <Image alt="logo empresa" p={6} src={logo} w={"100%"} />
            </Stack>
        </Stack>
    );
};

export default Business;
