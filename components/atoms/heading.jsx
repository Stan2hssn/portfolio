import React from "react";
import PropTypes from "prop-types";
import { classNames } from "@utils/class_names";

const COLOR_CLASSNAMES = {
  light: "text-content-grey_100",
  dark: "text-content-grey_900",
};

const SIZE_CLASSNAMES = {
  h1: "text-h1SM md:text-h1MD lg:text-h1LG xl:text-h1 font-title",
  h2: "text-h2SM md:text-h2MD lg:text-h2 font-title",
  h3: "text-h3SM md:text-h3MD lg:text-h3 font-title",
  cta: "text-ctaSM md:text-ctaMD lg:text-cta font-sans",
  body: "text-bodySM md:text-bodyMD lg:text-body font-sans",
  nav: "text-nav font-sans",
  separator: "text-separatorSM md:text-separatorMD lg:text-separator font-sans",
  description_sm:
    "text-description_SM md:text-description_smMD lg:text-description_sm font-sans",
  description_lg:
    "text-description_lgSM md:text-description_lgMD lg:text-description_lg font-sans",
  detail: "text-detailSM md:text-detailMD lg:text-detail font-sans",
};

export default function Heading({
  as,
  size = as,
  color = "light",
  children,
  className,
  anchor,
}) {
  const headingClassNames = classNames(
    SIZE_CLASSNAMES[size],
    COLOR_CLASSNAMES[color],
    className
  );

  const attrs = {};
  if (anchor?.length > 0) {
    attrs.anchor = anchor;
  }

  const HeadingTag = as === "span" ? "span" : as;

  return (
    <HeadingTag className={headingClassNames} {...attrs}>
      {children}
    </HeadingTag>
  );
}

Heading.propTypes = {
  anchor: PropTypes.string,
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "span", "p"])
    .isRequired,
  size: PropTypes.oneOf(Object.keys(SIZE_CLASSNAMES)),
  color: PropTypes.oneOf(Object.keys(COLOR_CLASSNAMES)),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};
