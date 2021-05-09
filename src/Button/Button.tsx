import React from "react";
import PropTypes from "prop-types";
import { AnyProps, CommonProps, AttributeTypes, useClassName } from "../utils";
import _ from "lodash";

export interface ButtonProps extends CommonProps, AnyProps {
  /** You can use custom element for this component */
  customElement?: React.ElementType;
  /** The color of the button */
  color?: AttributeTypes.Colors;
  /** Size of the button */
  size?: AttributeTypes.Size;
  /** Shape of the button */
  shape?: AttributeTypes.Shape;
  /** Button appearance type */
  appearance?: "default" | "link" | "outline" | "subtle";
  /** Loading indicator */
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    customElement: Component = "button",
    className,
    children,
    color,
    size,
    appearance,
    shape,
    loading,
    ...rest
  } = props;

  const { mergeClassName, addClassNames } = useClassName("btn");
  const classes = mergeClassName(
    className,
    addClassNames(appearance, color, size, _.kebabCase(shape), {
      loading,
    })
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

Button.displayName = "Button";

Button.propTypes = {
  color: PropTypes.oneOf<AttributeTypes.Colors>([
    "primary",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  size: PropTypes.oneOf<AttributeTypes.Size>(["xs", "sm", "md", "lg", "xl"]),
  shape: PropTypes.oneOf<AttributeTypes.Shape>([
    "rectangle",
    "rounded",
    "semiCircle",
  ]),
  loading: PropTypes.bool,
  appearance: PropTypes.oneOf(["default", "link", "outline", "subtle"]),
};

Button.defaultProps = {
  size: "md",
  shape: "rectangle",
  customElement: "button",
  loading: false,
  appearance: "default",
};

export default Button;
