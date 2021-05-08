import React from "react";
import PropTypes from "prop-types";
import { AnyProps, CommonProps, AttributeTypes, useClassName } from "../utils";
import _ from "lodash";

export interface ButtonProps extends CommonProps, AnyProps {
  /** You can use custom element for this component */
  customElement?: React.ElementType;
  /** The color of the button */
  colors?: AttributeTypes.Colors;
  /** Size of the button */
  size?: AttributeTypes.Size;
  /** Shape of the button */
  shape?: AttributeTypes.Shape;
  /** Loading indicator */
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    customElement: Component = "button",
    className,
    children,
    colors,
    size,
    shape,
    ...rest
  } = props;

  const { mergeClassName, addClassNames } = useClassName("btn");
  const classes = mergeClassName(
    className,
    addClassNames(colors, size, _.kebabCase(shape))
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

Button.displayName = "Button";

Button.propTypes = {
  colors: PropTypes.oneOf<AttributeTypes.Colors>([
    "default",
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
};

Button.defaultProps = {
  colors: "default",
  size: "md",
  shape: "rectangle",
  customElement: "button",
  loading: false,
};

export default Button;
