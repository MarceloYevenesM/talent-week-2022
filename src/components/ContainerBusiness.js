import React from "react";

import "../styles/business.css";
import { Box, Flex, Text } from "@chakra-ui/react";

import logoIBM from "../assets/business/logo-ibm.png";

import Business from "./Business";

const ContainerBusiness = () => {
    return (
        <Box bgColor={"brand.200"} height="30rem" marginTop={"10%"} width="100%">
            <Flex flexDirection="column" height="100%" justify="space-evenly" width="100%">
                <Box>
                    <Text fontSize="3.75rem" marginInlineStart="5rem" textTransform="uppercase">
                        Empresas participantes que te están buscando
                    </Text>
                    <Text fontSize="3.75rem" marginInlineStart="5rem" textTransform="uppercase">
                        te están buscando
                    </Text>
                </Box>
                <Flex gap="8rem" justify="space-evenly" width="100%">
                    <Business dark={false} logo={logoIBM} />
                    <Business dark={false} logo={logoIBM} />
                    <Business dark={false} logo={logoIBM} />
                    <Business dark={false} logo={logoIBM} />
                    <Business dark={false} logo={logoIBM} />
                    <Business dark={false} logo={logoIBM} />
                    <Business dark={false} logo={logoIBM} />
                    <Business dark={false} logo={logoIBM} />
                </Flex>
            </Flex>
        </Box>
    );
};

export default ContainerBusiness;
