"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Heading from "@atoms/heading";
import { useCursor } from "@context/cursor_provider";

export default function Nav_items({ ...props }) {
  const { cursorPos, isHovered, setCursorPos, setIsHovered, setScaled } =
    useCursor();

  const linkRef = useRef(null);

  const handleMouseMove = (e) => {
    if (linkRef.current && isHovered) {
      const linkRect = linkRef.current.getBoundingClientRect();
      setScaled("scale(2)");
      const cursorPostionY = linkRect.y + linkRect.height / 2;
      const cursorPostionX =
        linkRect.x +
        linkRect.width / 2 +
        (e.clientX - (linkRect.x + linkRect.width / 2)) / 2;
      setCursorPos({ x: cursorPostionX, y: cursorPostionY });
      console.log(cursorPostionX);
    }
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setScaled("scale(1)");
  };

  return (
    <>
      <Link
        ref={linkRef}
        href={`${props.link}`}
        scroll={false}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="relative h-[3rem] px-[1rem] flex items-center justify-center group"
      >
        <div className="flex h-[1.3rem] items-center ">
          <span className="h-[.9rem] overflow-hidden">
            <div
              className="
      flex flex-col col-auto font-sans text-nav uppercase select-none group-hover:-translate-y-[0.9rem] transition-transform duration-300 ease-in-out"
            >
              <Heading
                as="span"
                size="description_sm"
                color="light"
                className="flex group-hover:rotate-[20deg] origin-right transition-transform duration-300 ease-in-out"
              >
                {props.name}
              </Heading>
              <Heading
                as="span"
                size="description_sm"
                color="light"
                className="flex rotate-[20deg] group-hover:rotate-0 origin-top-left transition-transform duration-300 ease-in-out"
              >
                {props.name}
              </Heading>
            </div>
          </span>
        </div>
      </Link>
    </>
  );
}
