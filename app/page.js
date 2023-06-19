import React from "react";
import { lenis } from "@utils/lenis";
import Header from "@organismes/header";
import Hero from "@organismes/hero";
import AbsoluteBadges from "@atoms/aboslute_badges";
import Noise from "@atoms/noise";
import ProjectSection from "@organismes/project_section";
import Cursor from "@atoms/cursor";
import Footer from "@organismes/footer";

export default function Home() {
  return (
    <main data-scroll-container>
      <Cursor />
      <Noise />
      <Header />
      <AbsoluteBadges />
      <section className="flex flex-col w-full items-center z-10">
        <Hero />
        <ProjectSection />
      </section>
      <Footer />
    </main>
  );
}
