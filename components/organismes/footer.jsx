import React from "react";
import Banner from "@molecules/banner";
import Heading from "@atoms/heading";

export default function Footer() {
  return (
    <div className="flex flex-col w-auto h-auto bg-content-grey_100">
      <Heading as="h2" size="h2" color="dark" className="text-center py-32">
        Let’s take a cup of coffee <br /> together,
        <span className="text-bold">send me</span>
      </Heading>
      <Banner />
    </div>
  );
}
