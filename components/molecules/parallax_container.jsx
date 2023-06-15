"use client";
import React, { useEffect, useRef, useState } from "react";
import ParallaxImages from "@atoms/parallax_images";
import { classNames } from "@utils/class_names";
import gsap from "gsap";
import { useCursor } from "@context/cursor_provider";

const ParallaxContainer = React.forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);
  const { cursorPos, setIsOn } = useCursor();
  const coverCase = [
    "relative !aspect-[16/8] w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]",
    "absolute w-1/3 top-3/4 right-0 transform z-20",
    "absolute w-1/3 top-1/2  -translate-x-1/4 -translate-y-1/2 left-0 transform  z-10",
    "absolute W-1/4 top-2/2 left-2/3 transform translate-x-1/4 -translate-y-1/2 translate-z-1/2 z-0",
  ];

  const childContainers = coverCase.map(() => ({ contentRef: useRef() }));

  function handleEvent(e, containerRef, contentRef) {
    const parallaxContainerElement = containerRef.current;
    const parallaxContentElement = contentRef.current;

    if (!parallaxContainerElement || !parallaxContentElement) {
      return;
    }

    const influence = 10;

    const elementHeight = parallaxContentElement.offsetHeight;
    const newElementWidth = parallaxContentElement.offsetWidth;
    setElementWidth(newElementWidth);
    const offset =
      (parallaxContainerElement.getBoundingClientRect().top - elementHeight) /
        60 -
      1;
    const mouse = cursorPos.x / innerWidth - 0.5;

    const mouseX = mouse * influence;
    const translateX = -mouseX * influence;

    if (translateX) {
      gsap.to(parallaxContentElement, {
        "--translate-x": translateX + "px",
        duration: 0.5,
        ease: "slow",
      });
    }

    if (mouseX) {
      gsap.to(parallaxContainerElement, {
        "--mouse-x": mouseX + "deg",
        duration: 1,
        ease: "slow",
      });
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
      className="relative flex w-4/5 h-auto preserve-3d backface-hidden will-change-transform "
      ref={containerRef}
      onMouseEnter={() => {
        console.log("enter");
        setIsOn(true);
      }}
      onMouseLeave={() => {
        setIsOn(false);
      }}
      style={{
        transform: `perspective(${
          elementWidth * 3 + "px"
        }) rotateY(var(--mouse-x)) rotateX(var(--rotate-x)) `,
      }}
    >
      {childContainers.map(({ contentRef }, index) => (
        <div
          key={index}
          className={classNames(
            "flex justify-center items-center aspect-[16/10] will-change-transform transform-gpu bg-transparent overflow-hidden backface-hidden shadow-100 shadow-background-shadow_dark ",
            coverCase[index]
          )}
        >
          <ParallaxImages ref={contentRef} index={index} />
        </div>
      ))}
    </section>
  );
});

export default ParallaxContainer;
