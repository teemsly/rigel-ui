import React from "react";
import { CommonProps, useClassName } from "../utils";

export interface NavProps<T = string> extends CommonProps {
  /** Active key of the options */
  activeKey?: T;
  /** Nav appearance */
  appearance?: "subtle";
}

const Nav: React.FC<NavProps> = (props: NavProps) => {
  const { className, children, appearance, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("nav");
  const classes = mergeClassName(className, addClassNames(appearance));

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Nav.displayName = "Nav";
export default Nav;
