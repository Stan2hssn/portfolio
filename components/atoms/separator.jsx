import React from "react";
import Heading from "./heading";

const Separator = () => {
  return (
    <Heading as="span" size="separator" color="dark" className="flex px-2">
      ||
    </Heading>
  );
};

export default Separator;
