import React, { forwardRef } from "react";
import Image from "next/image";
import data from "@utils/data.json";

const ParallaxImages = forwardRef(({ index, ...props }, ref) => {
  const item = data[0].collection[0];
  if (!item || !item.thumbnails || item.thumbnails.length <= index) {
    return null;
  }

  const thumbnail = item.thumbnails[index];
  const isVideo = thumbnail.endsWith(".mp4");
  return isVideo ? (
    <video
      key={index}
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
      <source src={thumbnail} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <Image
      key={index}
      ref={ref}
      className="relative min-w-[130%] overflow-hidden transform will-change-transform bg-contain"
      src={thumbnail}
      alt={`Picture of the project ${item.title}`}
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
