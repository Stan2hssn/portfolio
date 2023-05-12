import { classNames } from "@utils/class_names";
import Link from "next/link";
import React from "react";
import Heading from "./heading";

export default function Nav_items({ ...props }) {
  return (
    <Link
      href={classNames(props.link)}
      scroll={false}
      className="flex h-[1.3rem] items-center group"
    >
      <span className="h-[.9rem] overflow-hidden">
        <div
          className="
      flex flex-col col-auto font-sans text-nav uppercase select-none group-hover:-translate-y-[0.9rem] transition-transform duration-300 ease-in-out"
        >
          <Heading
            as="span"
            size="description_sm"
            color="light"
            className="flex group-hover:rotate-[20deg] origin-right transition-transform duration-300 ease-in-out"
          >
            {props.name}
          </Heading>
          <Heading
            as="span"
            size="description_sm"
            color="light"
            className="flex rotate-[20deg] group-hover:rotate-0 origin-top-left transition-transform duration-300 ease-in-out"
          >
            {props.name}
          </Heading>
        </div>
      </span>
    </Link>
  );
}
