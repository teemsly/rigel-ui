import React from "react";
import PropTypes from "prop-types";
import { Indent } from "../Icons";
import { AnyProps, CommonProps, createComponent, useClassName } from "../utils";

export interface SidebarHeaderProps extends CommonProps, AnyProps {
  /** Show the brand or logo on the sidebar header */
  brand?: React.ReactNode;
  /** Show Minimizer */
  minimizer?: boolean;
  /** You can use custom element for the minimizer of the sidebar */
  renderMinimizer?: React.ReactNode;
}

const SidebarMinimizer = createComponent({
  name: "SidebarMinimizer",
  customElement: "div",
});

const SidebarHeader: React.FC<SidebarHeaderProps> = (
  props: SidebarHeaderProps
) => {
  const {
    children,
    className,
    brand,
    minimizer,
    renderMinimizer,
    handleMinimize,
    ...rest
  } = props;

  const { mergeClassName, addClassNames } = useClassName("sidebar-header");
  const classes = mergeClassName(className, addClassNames());

  let minimizerElement: React.ReactNode = (
    <SidebarMinimizer onClick={handleMinimize}>
      <Indent />
    </SidebarMinimizer>
  );

  if (renderMinimizer) {
    minimizerElement = renderMinimizer;
  }

  return (
    <div className={classes} {...rest}>
      {children}
      {minimizer && minimizerElement}
    </div>
  );
};

SidebarHeader.displayName = "SidebarHeader";
SidebarHeader.propTypes = {
  brand: PropTypes.node,
  minimizer: PropTypes.bool,
  renderMinimizer: PropTypes.node,
};

export default SidebarHeader;
