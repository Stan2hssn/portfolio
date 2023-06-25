import Nav_items from "@atoms/nav_item";
import React from "react";

export default function Banner() {
  return (
    <div className="flex row justify-between items-center px-20 py-4 bg-content-grey_900">
      <span className="flex flex-row uppercase">
        <Nav_items color="light">Linkedin</Nav_items>
        <Nav_items color="light">Soundcloud</Nav_items>
        <Nav_items color="light" name="Github" link="https://github.com">
          Github
        </Nav_items>
      </span>
      <Nav_items
        type="two"
        color="light"
        name="Github"
        link="https://github.com"
      >
        <span className="flex">Available to work</span>
        <span className="flex">- Aug 2023</span>
      </Nav_items>
    </div>
  );
}
