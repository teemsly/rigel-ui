import React, { HtmlHTMLAttributes } from "react";
import { CommonProps, useClassName } from "../utils";

export interface HeadingProps
  extends CommonProps,
    HtmlHTMLAttributes<HTMLHeadingElement> {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = (props: HeadingProps) => {
  const { className, type: Component = "h1", children, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("heading");
  const classes = mergeClassName(className, addClassNames(props.type));

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

Heading.displayName = "Heading";

Heading.defaultProps = {
  type: "h1",
};

export default Heading;
