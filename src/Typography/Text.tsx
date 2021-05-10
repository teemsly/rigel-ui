import React from "react";
import PropTypes from "prop-types";
import { CommonProps, useClassName } from "../utils";

export interface TextProps extends CommonProps {
  /** Wrapper text with custom element */
  wrapperAs?: React.ElementType;
  /** The text color */
  textType?: "muted" | "primary" | "info" | "warning" | "success" | "danger";
}

const Text: React.FC<TextProps> = (props: TextProps) => {
  const {
    wrapperAs: Component = "span",
    className,
    children,
    textType,
    ...rest
  } = props;

  const { mergeClassName, addClassNames } = useClassName("text");
  const classes = mergeClassName(className, addClassNames(textType));

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

Text.displayName = "Text";
Text.defaultProps = {
  wrapperAs: "span",
};
Text.propTypes = {
  textType: PropTypes.oneOf([
    "muted",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
  ]),
};

export default Text;
