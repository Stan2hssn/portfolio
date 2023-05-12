import React from "react";
import Image from "next/image";
import White from "@logo/Logo_white.svg";

function Logo() {
  return (
    <Image
      className="mix-blend-difference scale-[.80] select-none"
      src={White}
      alt="Logo"
      width={54}
      height={79}
      priority="true"
      quality={75}
    />
  );
}

export default Logo;
