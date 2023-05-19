import React from "react";
import { classNames } from "@utils/class_names";

export default function Container(props) {
  const { children, className, intern, expend, size = "lg" } = props;

  switch (size) {
    case "sm":
      return (
        <div
          className={classNames(
            "max-w-7xl mx-auto px-4 md:px-6 lg:px-8",
            className
          )}
        >
          {children}
        </div>
      );
    case "md":
      return (
        <div
          className={classNames("container max-w-5xl mx-auto px-8 ", className)}
        >
          {children}
        </div>
      );
    case "lg":
      return (
        <div className={classNames("flex w-full h-auto", expend)}>
          <div
            className={classNames(
              "container max-w-7xl mx-auto px-8 md:px-16",
              intern
            )}
          >
            {children}
          </div>
        </div>
      );
    case "xl":
      return (
        <div className="flex justify-center w-full">
          <div className={classNames("container mx-auto px-4 md:px-6 lg:px-8")}>
            {children}
          </div>
        </div>
      );
  }
}
