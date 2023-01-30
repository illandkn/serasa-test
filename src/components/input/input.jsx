import React from "react";
import "./input.css";

const Input = ({
    children,
    className,
    component: Component,
    theme,
    ...restProps
}) => {
    return (
        <Component
            className={`ui-input ui-input--${theme} ${className}`}
            {...restProps}>
            {children}
        </Component>
    );
};

Input.defaultProps = {
    component: "input",
    className: "",
    theme: "default-input",
};

export default Input;