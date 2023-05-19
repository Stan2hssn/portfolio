"use client";
import Container from "@templates/container";
import gsap from "gsap";
import React from "react";
import { classNames } from "@utils/class_names";
import Heading from "./heading";

export default function AbsoluteBadges() {
  const animationTextIn = "animationTextIn";
  const animationTextOut = "animationTextOut";
  const animationRound = "animationRound";
  const copyOut = "copyOut";
  const copyIn = "copyIn";

  const tl = gsap.timeline({ paused: true });
  const tl2 = gsap.timeline({ paused: true });
  const tl3 = gsap.timeline({ paused: true });

  async function animation() {
    tl2
      .to(".animationRound", {
        scale: 1.8,
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(".secondAnimation", {
        scale: 0.9,
        duration: 0.2,
        ease: "power2.inOut",
      });
    tl.to(".animationTextIn", {
      y: "-1rem",
      opacity: "0",
      gap: "1.5rem",
      duration: 0.3,
      ease: "power2.inOut",
    })
      .to(".animationTextIn", {
        display: "none",
        duration: 0,
      })
      .to(".animationTextOut", {
        display: "flex",
        duration: 0,
      })
      .to(".animationTextOut", {
        gap: "0.5rem",
        opacity: "1",
        y: "0rem",
        duration: 0.3,
        ease: "power2.inOut",
      });
  }

  function GsapIn() {
    tl.clear();
    tl2.clear();
    tl3.clear();
    tl.play();
    tl2.play();
    console.log("enter");
    animation();
  }

  function GsapOut() {
    tl.reverse();
    tl2.reverse();
    tl3.reverse();
    console.log("out");
  }

  function gsapClicked() {
    tl3.play();
    Clicked();
  }

  async function Clicked() {
    await navigator.clipboard.writeText("stan.husson@edu.gobelins.fr");

    tl3
      .to(".copyOut", {
        y: "0.5rem",
        opacity: "0",
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(".copyOut", {
        display: "none",
        duration: 0,
      })
      .to(".copyIn", {
        display: "flex",
        duration: 0,
      })
      .to(".copyIn", {
        y: "0rem",
        opacity: "1",
        duration: 0.3,
        ease: "power2.inOut",
      });
  }

  return (
    <Container
      size="lg"
      expend="absolute md:fixed flex-row w-full mb-8 md:mb-16 bottom-0 left-0 justify-start z-[900]"
      intern="flex justify-start w-full"
    >
      <div
        className="relative flex flex-col w-40 h-40 rounded-full items-center justify-center z-[100] cursor-pointer"
        onMouseEnter={GsapIn}
        onMouseLeave={GsapOut}
        onClick={gsapClicked}
      >
        <div className="flex flex-col z-[100]">
          <div
            className={classNames(
              "relative flex flex-col gap-2 items-center",
              animationTextIn
            )}
          >
            <Heading
              as="p"
              size="description_lg"
              color="light"
              className={classNames(
                "flex font-sans text-description_sm text-center text-content-grey_900 uppercase z-[100]",
                animationTextIn
              )}
            >
              Open <br /> to work
            </Heading>

            <Heading
              as="p"
              size="body"
              color="light"
              className={classNames(
                "flex font-sans text-description_sm text-center text-content-grey_900 uppercase",
                animationTextIn
              )}
            >
              - Aug 2023
            </Heading>
          </div>
        </div>
        <div className="flex flex-col z-[100]">
          <div
            className={classNames(
              "relative flex-col items-center hidden gap-6 opacity-0 translate-y-4",
              animationTextOut
            )}
          >
            <Heading
              as="p"
              size="description_lg"
              color="light"
              className={classNames(
                "flex font-sans text-description_sm text-center text-content-grey_900 uppercase z-100 translate-y-6",
                animationTextOut
              )}
            >
              stan.husson
              <br /> @edu.gobelins.fr
            </Heading>
            <div
              className={classNames(
                "flex flex-col items-center h-4 font-sans text-body text-center text-content-grey_900 uppercase z-100 translate-y-4 ",
                animationTextOut
              )}
            >
              <Heading
                as="p"
                size="body"
                color="light"
                className={classNames(
                  "flex font-sans text-body text-center text-content-grey_900 uppercase z-100",
                  animationTextOut,
                  copyOut
                )}
              >
                Click to copy
              </Heading>

              <Heading
                as="p"
                size="body"
                color="light"
                className={classNames(
                  "hidden opacity-0 font-sans text-body text-center text-semantic-purple uppercase z-100 translate-y-2 whitespace-nowrap",
                  copyIn
                )}
              >
                Copied to clipboard
              </Heading>
            </div>
          </div>
        </div>
        <span className="absolute flex self-center w-40 h-40 rounded-full z-0 pointer-events-none secondAnimation">
          <div
            className={classNames(
              "absolute flex items-center justify-center w-40 h-40"
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
              "absolute flex items-center justify-center w-40 h-40",
              animationRound
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
              "absolute flex items-center justify-center w-40 h-40",
              animationRound
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
              "absolute flex items-center justify-center w-40 h-40",
              animationRound
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
        </span>
      </div>
    </Container>
  );
}
