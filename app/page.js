import React from "react";
import { lenis } from "@utils/lenis";
import Header from "@organismes/Header";
import Hero from "@organismes/Hero";
import AbsoluteBadges from "@atoms/Aboslute_badges";
import Noise from "@atoms/Noise";
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
