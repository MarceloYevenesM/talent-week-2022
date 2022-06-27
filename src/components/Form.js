import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/form.css";

const Form = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      direction="column"
      alignItems="center"
      className="form"
      justify="space-evenly"
    >
      <div className="containerInput">
        <Text mb="8px" fontSize="18px" color="#FFFFFF">
          Nombre completo
        </Text>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa tus nombres y apellidos"
          className="input"
        />
      </div>
      <div className="containerInput">
        <Text mb="8px" fontSize="18px" color="#FFFFFF">
          País
        </Text>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa tu país de residencia"
          className="input"
        />
      </div>
      <div className="containerInput">
        <Text mb="8px" fontSize="18px" color="#FFFFFF">
          E-mail con el que te inscribiste en Coderhouse
        </Text>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa tu e-mail"
          className="input"
        />
      </div>
      <div className="containerInput">
        <Text mb="8px" fontSize="18px" color="#FFFFFF">
          Teléfono
        </Text>
        <input
          type="text"
          id="Teléfono"
          placeholder="Ingresa tu número completo"
          className="input"
        />
      </div>
      <div className="containerInput">
        <Text mb="8px" fontSize="18px" color="#FFFFFF">
        Linkedin
        </Text>
        <input
          type="text"
          id="linkedin"
          placeholder="Carga tu perfil de Linkedin"
          className="input"
        />
      </div>
      <div className="containerInput">
        <Text mb="8px" fontSize="18px" color="#FFFFFF">
        Portfolio
        </Text>
        <input
          type="text"
          id="nombre"
          placeholder="Carga tu Portfolio"
          className="input"
        />
      </div>
      <div className="containerInput">
        <Text mb="8px" fontSize="18px" color="#FFFFFF">
        ¿Qué estudiaste en Coderhouse?
        </Text>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa el nombre del curso o carrera"
          className="input"
        />
      </div>
      <div className="containerInput">
        <Text mb="8px" fontSize="18px" color="#FFFFFF">
        ¿Qué herramientas manejas?
        </Text>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa qué herramientas utilizas"
          className="input"
        />
      </div>
      <div className="containerInput">
        <Text mb="8px" fontSize="18px" color="#FFFFFF">
        ¿Quieres agregar otras habilidades?
        </Text>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa las habilidades que consideres"
          className="input"
        />
      </div>
   

      <Text color="#FFF">
        Un evento para que te animes a trabajar de lo que te gusta, ¿vas a
        perdértelo?
      </Text>
      <Button>Reservar mi lugar</Button>
      <Text color="#FFF">
        *Por dudas o consultas, puedes escribirnos aoutcomes@coderhouse.com
      </Text>
    </Flex>
  );
};

export default Form;
