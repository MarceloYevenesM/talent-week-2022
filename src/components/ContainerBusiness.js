import React from "react";
import "../styles/business.css";
import logoIBM from "../assets/business/logo-ibm.png";
import Business from "./Business";
import { Box, Flex, Text } from "@chakra-ui/react";

const ContainerBusiness = () => {
  return (
    <Box width="100%" height="30rem" marginTop={"10%"}>
      <Flex flexDirection="column" justify="space-evenly" width="100%" height="100%">
        <Box>
            <Text textTransform="uppercase" marginInlineStart="5rem" fontSize="3.75rem">
            Empresas participantes que te están buscando
            </Text>
            <Text textTransform="uppercase" marginInlineStart="5rem" fontSize="3.75rem">
            te están buscando
            </Text>
        </Box>
        <Flex width="100%" gap="8rem" justify="space-evenly">
          
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
