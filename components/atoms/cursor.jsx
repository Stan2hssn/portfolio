"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useCursor } from "@context/cursor_provider";
import { classNames } from "@utils/class_names";
import Heading from "@atoms/heading";

export default function Cursor() {
  const ref = useRef(null);
  const { cursorPos, isScaled, isOn } = useCursor();

  const onClick = useRef(null);

  const classOnClick = "classOnClick";
  const textOnClick = "textOnClick";

  useEffect(() => {
    onClick.current = gsap
      .timeline({ paused: true })
      .to(
        ".classOnClick",
        {
          width: "192px",
          height: "192px",
          mixBlendMode: "normal",
          duration: 0.6,
          ease: "slow",
        },
        "<"
      )
      .to(
        ".textOnClick",
        {
          opacity: "1",
          transform: "translateY(-1em)",
          duration: 0.2,
          ease: "power2.inOut",
        },
        ">"
      )
      .pause();
  }, []);

  useEffect(() => {
    const cursor = ref.current;
    if (cursor && cursorPos.x !== null && cursorPos.y !== null) {
      const cursorX = cursorPos.x + "px";
      const cursorY = cursorPos.y + "px";
      const scale = isScaled;

      if (cursorX && cursorY) {
        gsap.to(cursor, {
          "--cursor-x": cursorX,
          "--cursor-y": cursorY,
          duration: 0.2,
          ease: "slow",
        });
      }
      if (isScaled) {
        gsap.to(cursor, {
          "--cursor-scale": `${scale}`,
          duration: 0.2,
          ease: "slow",
        });
      }
      if (isOn) {
        onClick.current.play();
      }
      if (!isOn) {
        onClick.current.reverse();
      }
    }
  }, [cursorPos, isOn]);

  return (
    <div
      ref={ref}
      className={classNames(
        "fixed flex w-6 h-6 mix-blend-difference animate-cursor z-[9999] pointer-events-none",
        classOnClick
      )}
      style={{
        top: "var(--cursor-y, 0px)",
        left: "var(--cursor-x, 0px)",
        transform: "var(--cursor-scale, 1) translate(-50%, -50%)",
        transformOrigin: "0% 0%",
      }}
    >
      <div
        className={classNames(
          "absolute items-center justify-center flex w-full h-full z-[9999] opacity-0",
          textOnClick
        )}
      >
        <Heading
          as="p"
          size="button"
          color="light"
          className={"flex text-content-grey_900 uppercase translate-y-4"}
        >
          Click <br /> for more
        </Heading>
      </div>
      <div
        className={classNames(
          "absolute flex items-center justify-center w-6 h-6",
          classOnClick
        )}
      >
        <svg
          className="origin-center animate-spinSlow1"
          width="126"
          height="140"
          viewBox="0 0 176 190"
        >
          <ellipse
            cx="85.063"
            cy="96.6351"
            rx="85.063"
            ry="96.6351"
            transform="matrix(0.871356 0.490652 -0.48698 0.873413 60.8088 -31.3015)"
            fill="#EEEEEE"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div
        className={classNames(
          "absolute flex items-center justify-center w-6 h-6",
          classOnClick
        )}
      >
        <svg
          className="origin-center animate-spinSlow2"
          width="141"
          height="140"
          viewBox="0 0 251 220"
        >
          <ellipse
            cx="125.119"
            cy="109.937"
            rx="109.340"
            ry="125.119"
            transform="rotate(90 125.119 109.937)"
            fill="#EEEEEE"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      <div
        className={classNames(
          "absolute flex items-center justify-center w-6 h-6",
          classOnClick
        )}
      >
        <svg
          className="origin-center animate-spinSlow3"
          width="138"
          height="144"
          viewBox="0 0 248 224"
        >
          <ellipse
            cx="109.402"
            cy="125.339"
            rx="109.402"
            ry="125.339"
            transform="matrix(-0.340509 0.939515 -0.940418 -0.345502 278.621 52.5823)"
            fill="#EEEEEE"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      <div
        className={classNames(
          "absolute flex items-center justify-center w-6 h-6",
          classOnClick
        )}
      >
        <svg
          className="origin-center animate-spinSlow4"
          width="135"
          height="137"
          viewBox="0 0 237 250"
        >
          <ellipse
            cx="118.233"
            cy="124.904"
            rx="117.921"
            ry="124.904"
            fill="#EEEEEE"
          />
        </svg>
      </div>
    </div>
  );
}
