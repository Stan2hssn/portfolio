import Container from "@templates/container";
import Separator from "@atoms/separator";
import React from "react";
import Heading from "@atoms/heading";
import ParallaxContainer from "@molecules/parallax_container";

export default function ProjectSection() {
  const parallaxContainers = Array(5)
    .fill(null)
    .map((_, index) => `Capsens ${index + 1}` /* 1, 2, 3, 4, 5 */);
  return (
    <Container
      id="Project"
      size="lg"
      intern="flex flex-col items-center w-full h-auto  md:h-auto md:py-44"
      expend="justify-center bg-content-grey_100"
    >
      <Heading as="h1" color="dark">
        Collections
      </Heading>
      {parallaxContainers.map((index) => (
        <div
          key={index}
          className="flex flex-col gap-24 pt-64 justify-center items-center w-full"
        >
          <div className="flex flex-col items-center gap-16">
            <Heading
              as="p"
              size="description_lg"
              color="dark"
              className="flex flex-col items-center uppercase w-full"
            >
              <span className="flex flex-row items-center">
                UI/ux design <Separator /> 3d modelisation <Separator />
                animation
              </span>
              <span className="flex flex-row items-center">
                motion 2D/3d <Separator /> sound <Separator /> Illustration
              </span>
            </Heading>
            <Heading as="h2" color="dark" className="flex text-center">
              {index}
            </Heading>
          </div>
          <ParallaxContainer index={index} key={index} />
        </div>
      ))}
    </Container>
  );
}
