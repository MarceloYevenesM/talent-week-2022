import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Form from "./Form";
import "../styles/form.css";

const ContainerRegistration = () => {
  return (
    <Flex
      className="formContainer"
      width="100%"
      height="1920px"
      direction="column"
      alignItems="center"
      justify="space-around"
    >
      <Flex
        width="100%"
        direction="column"
        alignItems=""
        gap={7}
        p={55}
        className="form-title"
      >
        <Text fontSize="72px">SAVE THE DATE</Text>
        <Text fontSize="25px">
          DESDE EL MIERCOLES 27 AL JUEVES 28 DE JULIO
        </Text>
      </Flex>
      <Form />
      <Flex gap={5} width="100%" justify="space-around">
        <Text className="carrusel">TALENTWEEK</Text>
        <Text className="carrusel">TALENTWEEK</Text>
        <Text className="carrusel">TALENTWEEK</Text>
        <Text className="carrusel">TALENTWEEK</Text>
        <Text className="carrusel">TALENTWEEK</Text>
      </Flex>
    </Flex>
  );
};

export default ContainerRegistration;
