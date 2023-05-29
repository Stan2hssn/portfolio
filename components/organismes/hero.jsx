import Heading from "@atoms/heading";
import Container from "@templates/container";
import Blob from "@molecules/blob/index";
import React from "react";

export default function Hero() {
  return (
    <section className="relative flex  flex-row w-full h-auto">
      <div className="absolute w-screen  min-h-screen h-full -z-10">
        <Blob />
      </div>
      <Container
        id="Welcome"
        size="lg"
        expend="justify-center"
        intern="flex flex-col col-auto h-screen md:min-h-screen md:py-44"
      >
        <section className="flex flex-col w-full h-full justify-center md:h-auto items-start md:items-center gap-y-8 md:gap-y-16 pb-24">
          <Heading as="h1" className="flex md:text-center text-left">
            Let’s create cool things together
          </Heading>
          <Heading
            as="p"
            size="description_lg"
            className="flex font-sans uppercase text-left md:text-center"
          >
            FRENCH front-end DESIGNER <br /> GOBELINS STUDENT <br /> UI / UX /
            3D / Sound
          </Heading>
        </section>
      </Container>
    </section>
  );
}
