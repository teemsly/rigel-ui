import React from "react";
import { AnyProps, CommonProps, useClassName } from "../utils";

export interface SectionBodyProps extends CommonProps, AnyProps {}

const SectionBody: React.FC<SectionBodyProps> = (props: SectionBodyProps) => {
  const {
    componentClass: Component = "div",
    className,
    children,
    ...rest
  } = props;

  const { mergeClassName, addClassNames } = useClassName("section-body");

  const classes = mergeClassName(className, addClassNames());

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

SectionBody.displayName = "SectionBody";

export default SectionBody;
