import { Stack, Text } from "@chakra-ui/react";

const DiaItem = ({ texto }) => {
    return (
        <Stack
            bgColor={"brand.300"}
            borderColor={"brand.100"}
            borderWidth={{ base: ".35rem", md: ".5rem" }}
            boxShadow={{ base: "mobileN", md: "desktopN" }}
            w={{ base: "100%", md: "20%" }}
        >
            <Text
                color={"brand.100"}
                fontWeight={"black"}
                p={4}
                textAlign={"center"}
                textStyle={"h2"}
                textTransform={"uppercase"}
            >
                {texto}
            </Text>
        </Stack>
    );
};

export default DiaItem;
