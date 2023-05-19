import React, { forwardRef } from "react";
import Image from "next/image";

const ParallaxImages = forwardRef((props, ref) => (
  <Image
    key={props.key}
    ref={ref}
    className="relative min-w-[150%] transform will-change-transform bg-contain"
    src="https://images.unsplash.com/photo-1539639087565-41c59f40f3d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
    alt="Picture of the author"
    width={500}
    height={500}
    style={{
      transformStyle: "preserve-3d",
      transform: "translate3d(var(--translate-x), 0, 0)",
    }}
    {...props}
  />
));

export default ParallaxImages;
