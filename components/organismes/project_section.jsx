"use client";
import Container from "@templates/Container";
import ParallaxImages from "@molecules/parallax_images";
import Separator from "@atoms/separator";
import React, { useEffect, createRef } from "react";
import Heading from "@atoms/heading";

export default function ProjectSection() {
  const parallaxContainers = Array(5)
    .fill(null)
    .map(() => ({ containerRef: createRef(), contentRef: createRef() }));

  function handleEvent(e, containerRef, contentRef) {
    const parallaxContainerElement = containerRef.current;
    const parallaxContentElement = contentRef.current;

    if (!parallaxContainerElement || !parallaxContentElement) {
      return;
    }

    const influence = 16;

    const elementHeight = parallaxContentElement.offsetWidth;
    const offset =
      (parallaxContainerElement.getBoundingClientRect().top -
        elementHeight / 2) /
        60 +
      3;
    const constraint = elementHeight / 2;
    const mouse = e.clientX / window.innerWidth - 0.5;

    const mouseX = mouse * influence;
    const translateX = mouseX * 4 - constraint;

    handleParallax(
      offset,
      mouseX,
      translateX,
      elementHeight,
      containerRef,
      contentRef
    );
  }

  function handleParallax(
    offset,
    mouseX,
    translateX,
    elementHeight,
    containerRef,
    contentRef
  ) {
    const parallaxContainerElement = containerRef.current;
    const parallaxContentElement = contentRef.current;

    if (translateX) {
      parallaxContentElement.style.setProperty(
        "--translate-x",
        translateX + "px"
      );
    }

    parallaxContainerElement.style.setProperty(
      "--height-y",
      elementHeight + "px"
    );

    if (mouseX) {
      parallaxContainerElement.style.setProperty("--mouse-x", mouseX + "deg");
    }

    if (offset) {
      parallaxContainerElement.style.setProperty("--rotate-x", offset + "deg");
    }
  }

  useEffect(() => {
    const handleScroll = (e) => {
      parallaxContainers.forEach(({ containerRef, contentRef }) => {
        handleEvent(e, containerRef, contentRef);
      });
    };

    const handleMouseMove = (e) => {
      parallaxContainers.forEach(({ containerRef, contentRef }) => {
        handleEvent(e, containerRef, contentRef);
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [parallaxContainers]);

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
      {parallaxContainers.map(({ containerRef, contentRef }, index) => (
        <div
          key={index}
          className="flex flex-col gap-24 pt-32 justify-center items-center w-full"
        >
          <div className="flex flex-col items-center gap-6">
            <Heading as="h2" color="dark" className="flex text-center">
              Colord
            </Heading>

            <Heading
              as="p"
              size="description_lg"
              color="dark"
              className="flex flex-col items-center uppercase w-full"
            >
              <span className="flex flex-row">
                UI/ux design <Separator /> 3d modelisation <Separator />{" "}
                animation
              </span>
              <span className="flex flex-row">
                motion 2D/3d <Separator /> sound <Separator /> Illustration
              </span>
            </Heading>
          </div>
          <div
            key={index}
            ref={containerRef}
            className="relative flex justify-center items-center w-2/3 aspect-video transform-gpu overflow-hidden shadow-100 shadow-background-shadow_light"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "perspective(var(--height-y)) rotateY(var(--mouse-x)) rotateX(var(--rotate-x))",
            }}
          >
            <ParallaxImages key={index} ref={contentRef} />
          </div>
        </div>
      ))}
    </Container>
  );
}
