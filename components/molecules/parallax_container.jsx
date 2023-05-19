"use client";
import React, { useEffect, useRef, createRef } from "react";
import ParallaxImages from "@atoms/parallax_images";
import { classNames } from "@utils/class_names";

const ParallaxContainer = React.forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const coverCase = [
    "relative w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0",
    "absolute w-1/3 top-2/3 right-0 transform z-20",
    "absolute w-1/4 top-1/3 left-0 transform  z-10",
    "absolute W-1/4 top-2/2 left-2/3 transform -translate-y-1/2 -z-10",
  ];

  const childContainers = coverCase.map(() => ({ contentRef: useRef() }));

  function handleEvent(e, containerRef, contentRef) {
    const parallaxContainerElement = containerRef.current;
    const parallaxContentElement = contentRef.current;

    if (!parallaxContainerElement || !parallaxContentElement) {
      return;
    }

    const influence = 16;

    const elementHeight = parallaxContentElement.offsetHeight;
    const offset =
      (parallaxContainerElement.getBoundingClientRect().top - elementHeight) /
        120 -
      1;
    const mouse = e.clientX / window.innerWidth - 0.5;

    const mouseX = mouse * influence;
    const translateX = mouseX * 4;

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
    const parallaxContainerElement = containerRef.current;

    const handleScroll = (e) => {
      childContainers.forEach(({ contentRef }) => {
        handleEvent(e, containerRef, contentRef);
      });
    };

    const handleMouseMove = (e) => {
      childContainers.forEach(({ contentRef }) => {
        handleEvent(e, containerRef, contentRef);
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef, childContainers]);

  return (
    <section
      className="relative flex w-3/4 h-auto"
      ref={containerRef}
      style={{
        transform:
          "perspective(var(--height-y)) rotateY(var(--mouse-x)) rotateX(var(--rotate-x))",
      }}
    >
      {childContainers.map(({ contentRef }, index) => (
        <div
          key={index}
          className={classNames(
            "flex justify-center items-center aspect-video transform-gpu overflow-hidden shadow-100 shadow-background-shadow_light",
            coverCase[index]
          )}
        >
          <ParallaxImages ref={contentRef} />
        </div>
      ))}
    </section>
  );
});

export default ParallaxContainer;
