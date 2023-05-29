import React, { forwardRef } from "react";
import Image from "next/image";

const cover = {
  video: "/images/projects/Liquid/Cover.mp4",
  image: "/images/projects/Liquid/Liquid_2.webp",
};

const ParallaxImages = forwardRef((props, ref) => {
  const isVideo = cover.video && cover.video.endsWith(".mp4");

  return isVideo ? (
    <video
      key={props.key}
      ref={ref}
      width={500}
      height={500}
      style={{
        transformStyle: "preserve-3d",
        transform: "translate3D(var(--translate-x), 0,0)",
      }}
      autoPlay
      muted
      loop
      controls
      className="relative min-w-[150%] transform will-change-transform bg-contain"
    >
      <source src={cover.video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <Image
      key={props.key}
      ref={ref}
      className="relative min-w-[130%] overflow-hidden transform will-change-transform bg-contain"
      src={cover.image}
      alt="Picture of the project"
      width={500}
      height={500}
      priority="true"
      quality={100}
      style={{
        transformStyle: "preserve-3d",
        transform: "translate3d(var(--translate-x), 0, 0)",
      }}
      {...props}
    />
  );
});

export default ParallaxImages;
