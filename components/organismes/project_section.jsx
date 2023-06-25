import Container from "@templates/container";
import Separator from "@atoms/separator";
import React from "react";
import Heading from "@atoms/heading";
import ParallaxContainer from "@molecules/parallax_container";
import data from "@utils/data.json";

export default function ProjectSection() {
  const parallaxContainers = Array(5).fill(null);
  return (
    <Container
      id="Project"
      size="lg"
      intern="flex flex-col items-center w-full h-auto  md:h-auto md:pt-44"
      expend="justify-center bg-content-grey_100"
    >
      <Heading as="h1" color="dark">
        Collections
      </Heading>
      {parallaxContainers.map((_, index) => {
        const item = data[0].collection[index];

        const firstLineTags = item.tags.slice(0, 3).reduce((prev, curr, i) => {
          return [
            ...prev,
            curr,
            i < item.tags.slice(0, 3).length - 1 && <Separator />,
          ];
        }, []);
        const secondLineTags = item.tags.slice(3).reduce((prev, curr, i) => {
          return [
            ...prev,
            curr,
            i < item.tags.slice(3).length - 1 && <Separator />,
          ];
        }, []);

        return (
          <div
            key={index}
            className="flex flex-col gap-24 mt-32 mb-48 justify-center items-center w-full"
          >
            <div className="flex flex-col items-center gap-16">
              <Heading
                as="p"
                size="description_lg"
                color="dark"
                className="flex flex-col items-center uppercase w-full"
              >
                <span className="flex flex-row items-center">
                  {firstLineTags}
                </span>
                <span className="flex flex-row items-center">
                  {secondLineTags}
                </span>
              </Heading>
              <Heading as="h2" color="dark" className="flex text-center">
                {item.title}
              </Heading>
            </div>
            <ParallaxContainer index={index} key={index} />
          </div>
        );
      })}
    </Container>
  );
}
