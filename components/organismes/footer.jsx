import React from "react";
import Banner from "@molecules/banner";
import Heading from "@atoms/heading";
import Hello from "@atoms/hello";

export default function Footer() {
  return (
    <div className="flex flex-col w-auto h-auto bg-content-grey_100">
      <div className="flex flex-col items-center py-32">
        <Heading
          as="h2"
          size="h2"
          color="dark"
          className="md:block flex flex-col items-center !font-sans !font-light text-center py-4 px-12"
        >
          Let’s grab a cup of coffee together,
          <span className="md:contents flex font-bold "> send me</span>
        </Heading>
        <Hello />
      </div>
      <Banner />
    </div>
  );
}
