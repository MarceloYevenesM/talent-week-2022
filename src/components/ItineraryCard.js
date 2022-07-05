import { Flex, Stack } from "@chakra-ui/react";
import React from "react";

import ActivityCard from "./ActivityCard";
import DayCard from "./DayCard";

const ItineraryCard = () => {
    return (
        <Stack
            bgColor={"brand.200"}
            borderColor={"brand.100"}
            borderWidth={{ base: ".25rem", md: ".5rem" }}
            boxShadow={{ base: "mobileN", md: "desktopN" }}
            justifyContent={"space-between"}
            p={12}
            spacing={12}
            w={{ base: "100%", md: "70%" }}
        >
            <Stack spacing={12}>
                <ActivityCard
                    content="Se realizará a través de un formulario en el que se pedirán datos de
                    contacto, CV, LinkedIn, portfolio, manejo de tecnologías y herramientas,
                    y empresas de interés."
                    date="del 11 al 20 de julio"
                    title="INSCRIPCIÓN DE NUESTRA COMUNIDAD"
                />

                <ActivityCard
                    content="El equipo de Outcome del área de Talento de Coderhouse dictará talleres donde se abordarán técnicas como elevator pitch, tips a tener en cuenta en CV y perfil de LinkedIn, entre otros."
                    date="del 25 al 26 de julio"
                    title="FOCUS GROUP"
                />

                <ActivityCard
                    content="Las empresas tendrán un espacio de 20 a 25 min para presentarse, comentar los tipos de perfiles que les interesan, tecnologías y lenguajes que utilizan y habilidades blandas relevantes para aplicar. La transmisión será a través de YouTube.
        "
                    date="del 27 al 28 de julio"
                    title="EMPLOYER BRANDING"
                />

                <ActivityCard
                    content="Se realizará a través de un formulario en el que se pedirán datos de
                    contacto, CV, LinkedIn, portfolio, manejo de tecnologías y herramientas,
                y empresas de interés."
                    date="del 8 al 12 de agosto"
                    title="INSCRIPCIÓN DE NUESTRA COMUNIDAD"
                />
            </Stack>

            <Stack spacing={6}>
                <div className="container-days">
                    <div className="container-day-1">
                        <DayCard items={["Talent"]} title="lunes 08" />
                    </div>

                    <div className="container-day-4">
                        <DayCard items={["IBM", "Gaia Desing", "Fly bondi"]} title="jueves 11" />
                    </div>

                    <div className="container-day-2">
                        <DayCard
                            items={[
                                "Ualá",
                                "Globant México",
                                "Cervecería y Maltería Quilmes",
                                "Casai",
                            ]}
                            title="martes 09"
                        />
                    </div>

                    <div className="container-day-3">
                        <DayCard
                            items={["Buk", "Xpectral", "Globant Argentina"]}
                            title="miercoles 10"
                        />
                    </div>

                    <div className="container-day-5">
                        <DayCard items={["Bitso", "Kueski", "Kavak"]} title="viernes 12" />
                    </div>
                </div>
            </Stack>
        </Stack>
    );
};

export default ItineraryCard;
