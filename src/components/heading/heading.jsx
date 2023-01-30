import React from "react";
import "./heading.css";

const Heading = ({
  children,
  className,
  component: Component,
  theme,
  ...restProps
}) => {
  return (
    <Component
      className={`ui-heading ui-heading--${theme} ${className}`}
      {...restProps}>
      {children}
    </Component>
  );
};

Heading.defaultProps = {
  component: "a",
  className: "",
  theme: "",
};

export default Heading;
