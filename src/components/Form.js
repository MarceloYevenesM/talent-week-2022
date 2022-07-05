import React from "react";
import { Button, Flex, Stack, Text, FormControl } from "@chakra-ui/react";

const Form = () => {
    return (
        <Stack
            bgColor={"brand.100"}
            borderColor={"brand.200"}
            borderWidth={".5rem"}
            boxShadow={{ base: "mobile", md: "desktop" }}
            marginBottom={12}
            width={{ base: "100%", md: "60%" }}
        >
            <FormControl>
                <Stack
                    alignItems="center"
                    direction="column"
                    height="100%"
                    justify="space-around"
                    p={12}
                    spacing={12}
                    width="100%"
                >
                    <div className="containerInput">
                        <Text mb="8px" textStyle={"p3"}>
                            Nombre completo
                        </Text>
                        <input
                            className="input"
                            id="nombre"
                            placeholder="Ingresa tus nombres y apellidos"
                            type="text"
                        />
                    </div>
                    <div className="containerInput">
                        <Text mb="8px" textStyle={"p3"}>
                            País
                        </Text>
                        <input
                            className="input"
                            id="nombre"
                            placeholder="Ingresa tu país de residencia"
                            type="text"
                        />
                    </div>
                    <div className="containerInput">
                        <Text mb="8px" textStyle={"p3"}>
                            E-mail con el que te inscribiste en Coderhouse
                        </Text>
                        <input
                            className="input"
                            id="nombre"
                            placeholder="Ingresa tu e-mail"
                            type="text"
                        />
                    </div>
                    <div className="containerInput">
                        <Text mb="8px" textStyle={"p3"}>
                            Teléfono
                        </Text>
                        <input
                            className="input"
                            id="Teléfono"
                            placeholder="Ingresa tu número completo"
                            type="text"
                        />
                    </div>
                    <div className="containerInput">
                        <Text mb="8px" textStyle={"p3"}>
                            Linkedin
                        </Text>
                        <input
                            className="input"
                            id="linkedin"
                            placeholder="Carga tu perfil de Linkedin"
                            type="text"
                        />
                    </div>
                    <div className="containerInput">
                        <Text mb="8px" textStyle={"p3"}>
                            Portfolio
                        </Text>
                        <input
                            className="input"
                            id="nombre"
                            placeholder="Carga tu Portfolio"
                            type="text"
                        />
                    </div>
                    <div className="containerInput">
                        <Text mb="8px" textStyle={"p3"}>
                            ¿Qué estudiaste en Coderhouse?
                        </Text>
                        <input
                            className="input"
                            id="nombre"
                            placeholder="Ingresa el nombre del curso o carrera"
                            type="text"
                        />
                    </div>
                    <div className="containerInput">
                        <Text mb="8px" textStyle={"p3"}>
                            ¿Qué herramientas manejas?
                        </Text>
                        <input
                            className="input"
                            id="nombre"
                            placeholder="Ingresa qué herramientas utilizas"
                            type="text"
                        />
                    </div>
                    <div className="containerInput">
                        <Text mb="8px" textStyle={"p3"}>
                            ¿Quieres agregar otras habilidades?
                        </Text>
                        <input
                            className="input"
                            id="nombre"
                            placeholder="Ingresa las habilidades que consideres"
                            type="text"
                        />
                    </div>

                    <Text textAlign={"center"} textStyle={"p3"}>
                        Un evento para que te animes a trabajar de lo que te gusta, ¿vas a
                        perdértelo?
                    </Text>
                    <Button size={"xl"} variant={"coder-house"} w={{ base: "90%", md: "40%" }}>
                        Reservar mi lugar
                    </Button>
                    <Text textAlign={"center"} textStyle={"p3"}>
                        *Por dudas o consultas, puedes escribirnos aoutcomes@coderhouse.com
                    </Text>
                </Stack>
            </FormControl>
        </Stack>
    );
};

export default Form;
