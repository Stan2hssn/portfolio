import React from "react";
import { lenis } from "@utils/lenis";
import Header from "@organismes/header";
import Hero from "@organismes/hero";
import AbsoluteBadges from "@atoms/Absolute_badges";
import Noise from "@atoms/noise";
import ProjectSection from "@organismes/project_section";

export default function Home() {
  return (
    <main data-scroll-container>
      <Noise />
      <Header />
      <AbsoluteBadges />

      <section className="flex flex-col w-full items-center z-10">
        <Hero />
        <ProjectSection />
      </section>
    </main>
  );
}
