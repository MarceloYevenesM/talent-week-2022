import { Image, Stack } from "@chakra-ui/react";

const NavLogo = () => {
    return (
        <Stack h={"70px"} w={"70px"}>
            <Image
                boxSize={"100%"}
                src="https://firebasestorage.googleapis.com/v0/b/sm-portfolio-4c746.appspot.com/o/Logo%20TW.png?alt=media&token=fad7b3a6-3e8d-464d-a33d-c51c706030ae"
            />
        </Stack>
    );
};

export default NavLogo;
