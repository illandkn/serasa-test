import React from "react";
import "./button.css";

const Button = ({
    children,
    className,
    component: Component,
    theme,
    ...restProps
  }) => {
    return (
      <Component
        className={`ui-button ui-button--${theme} ${className}`}
        {...restProps}>
        {children}
      </Component>
    );
  };
  
  Button.defaultProps = {
    component: "button",
    className: "",
    theme: "default-button",
  };
  
  export default Button;