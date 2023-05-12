"use client";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 0.6,
  easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
export default lenis;
