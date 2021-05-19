import React from "react";
import { CommonProps, useClassName } from "../utils";

export interface DropdownToggleProps extends CommonProps {
  customElement?: React.ElementType;
  toggle?: string;
  renderToggle?: (children: React.ReactNode) => React.ReactNode;
}

const DropdownToggle = React.forwardRef(
  (props: DropdownToggleProps, ref: any) => {
    const {
      customElement: Component = "div",
      children,
      className,
      toggle,
      renderToggle,
      ...rest
    } = props;

    const { mergeClassName, addClassNames } = useClassName("dropdown-toggle");
    const classes = mergeClassName(className, addClassNames());

    let toggleElement: any = children;
    if (renderToggle) {
      toggleElement = renderToggle(children);
    }

    return (
      <Component ref={ref} className={classes} {...rest}>
        {toggleElement}
      </Component>
    );
  }
);

export default DropdownToggle;
