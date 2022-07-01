import { Flex } from "@chakra-ui/react";
import React from "react";

import ActivityCard from "./ActivityCard";
import DayCard from "./DayCard";

const ItineraryCard = () => {
  return (
    <div className="card-itinerary">
      <Flex direction={{ base: "column" }} justify="space-between" height="75%">
        <ActivityCard
          date="del 11 al 20 de julio"
          title="INSCRIPCIÓN DE NUESTRA COMUNIDAD"
          content="Se realizará a través de un formulario en el que se pedirán datos de
  contacto, CV, LinkedIn, portfolio, manejo de tecnologías y herramientas,
  y empresas de interés."
        />

        <ActivityCard
          date="del 25 al 26 de julio"
          title="FOCUS GROUP"
          content="El equipo de Outcome del área de Talento de Coderhouse dictará talleres donde se abordarán técnicas como elevator pitch, tips a tener en cuenta en CV y perfil de LinkedIn, entre otros."
        />

        <ActivityCard
          date="del 27 al 28 de julio"
          title="EMPLOYER BRANDING"
          content="Las empresas tendrán un espacio de 20 a 25 min para presentarse, comentar los tipos de perfiles que les interesan, tecnologías y lenguajes que utilizan y habilidades blandas relevantes para aplicar. La transmisión será a través de YouTube.
        "
        />

        <ActivityCard
          date="del 8 al 12 de agosto"
          title="INSCRIPCIÓN DE NUESTRA COMUNIDAD"
          content="Se realizará a través de un formulario en el que se pedirán datos de
  contacto, CV, LinkedIn, portfolio, manejo de tecnologías y herramientas,
  y empresas de interés."
        />
      </Flex>

      <div className="container-days">
        <Flex
          direction="column"
          justify="space-between"
          width="33.333%"
          align="center"
          gap="2rem"
          className="container-days-1"
        >
          <DayCard
            height={"5.875rem"}
            width={"12.75rem"}
            items={["Talent"]}
            title="lunes 08"
          />
          <DayCard
            height={"7rem"}
            width={"12.75rem"}
            items={["IBM", "Gaia Desing", "Fly bondi"]}
            title="jueves 11"
          />
        </Flex>

        <Flex
          direction="column"
          justify="space-between"
          className="container-days-2"
          width="33.333%"
          align="center"
          gap="2rem"
        >
          <DayCard
            height={"12rem"}
            width={"12.625rem"}
            items={[
              "Ualá",
              "Globan México",
              "Cervecería y Maltería Quilmes",
              "Casai",
            ]}
            title="martes 09"
          />
        </Flex>

        <Flex
          direction="column"
          justify="space-between"
          width="33.333%"
          align="center"
          gap="2rem"
          className="container-days-3"
        >
          <DayCard
            height={"6.875rem"}
            width={"12.75rem"}
            items={["Buk, Xpectral", "Globant Argentina"]}
            title="miercoles 10"
          />
          <DayCard
            height={"7rem"}
            width={"12.75rem"}
            items={["Bitso", "Kueski", "Kavak"]}
            title="viernes 12"
          />
        </Flex>
      </div>
    </div>
  );
};

export default ItineraryCard;
