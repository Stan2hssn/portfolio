"use client";
import React, { useEffect, useRef, useState } from "react";
import Heading from "@atoms/heading";
import color from "@utils/color";
import { gsap } from "gsap";
import { useCursor } from "@context/cursor_provider";

export default function Hello() {
  const [i, setIndex] = useState(0);
  const ref = useRef(null);
  const { setScaled } = useCursor();
  /*  const refChildren = useRef(null);
  const [mouseOver, setMouseOver] = useState(false); */

  useEffect(() => {
    let tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0,
      paused: true,
    });
    tl.fromTo(
      ref.current,
      { width: "120%" },
      { duration: 1, width: "0%", ease: "slow", delay: 3 }
    ).call(() => setIndex((prevI) => (prevI + 1) % color.length));

    tl.play();

    /*   const parentWidth = refChildren.current.parentNode.offsetWidth;
    const childWidth = ref.current.offsetWidth;
    const widthPercentage = (childWidth / parentWidth) * 100;

    const handleMouseOver = () => {
      const intervalId = setInterval(() => {
        if (widthPercentage >= 100) {
          tl.pause();
        } else {
          tl.resume();
        }
      }, 100); // Check every 100ms

      // Clear interval on unmount or if mouse is not over anymore
      return () => clearInterval(intervalId);
    };

    if (mouseOver) {
      handleMouseOver();
    }*/
  }, []);

  function handleMouseEnter() {
    setScaled("scale(0)");
  }
  function handleMouseLeave() {
    setScaled("scale(1)");
  }

  function Clicked() {
    let subject = encodeURIComponent(
      "Fantastic Website and a Coffee Invitation"
    );
    let body = encodeURIComponent(
      "Hey Stan,\r\n\r\nI recently came across your website and was truly impressed by your work.\r\n\r\nI must say, your website is a cup of freshly brewed creativity!\r\nIt would be a delight to discuss your amazing work and share a cup of coffee with you. Maybe we can even brainstorm over some 'frappe' ideas!\r\n\r\nPlease let me know a time that works best for you. Looking forward to your positive response.\r\n\r\nBest regards"
    );
    window.location.href = `mailto:stan.husson@edu.gobelins.fr?subject=${subject}&body=${body}`;
  }

  return (
    <div
      className="flex flex-row px-12 justify-center group cursor-pointer gap-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={Clicked}
    >
      <Heading
        as="h2"
        size="h1"
        color="dark"
        className="flex text-center py-4 justify-center"
      >
        “
      </Heading>
      <div ref={ref} className="flex overflow-hidden justify-center w-auto">
        <Heading
          as="h2"
          size="h2"
          color="dark"
          className="flex !font-sans text-center py-4 justify-center origin-center hello"
        >
          <div
            /* ref={refChildren} */
            className="flex flex-col items-center w-full gap-4 "
          >
            <div
              className="flex w-auto font-bold justify-center text-center origin-center break-keep px-4"
              style={{
                color: color[i].color,
              }}
            >
              {color[i].word}
            </div>
            <span
              className="flex w-0 h-3 group-hover:w-full origin-center transition-width duration-700 ease-in-out"
              style={{
                backgroundColor: color[i].color,
              }}
            ></span>
          </div>
        </Heading>
      </div>
      <Heading as="h2" size="h1" color="dark" className="flex text-center py-4">
        ”
      </Heading>
    </div>
  );
}
