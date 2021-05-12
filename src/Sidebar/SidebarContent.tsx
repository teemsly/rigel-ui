import React from "react";
import PropTypes from "prop-types";
import { CommonProps, createComponent, useClassName } from "../utils";

export interface SidebarContentProps extends CommonProps {
  /** Scrollable of the component */
  scrollable?: boolean;
}

const ScrollbaleWrapper = createComponent({
  name: "ScrollableWrapper",
  customElement: "div",
  classPrefix: "sidebar-content-scrollable",
});

const SidebarContent: React.FC<SidebarContentProps> = (
  props: SidebarContentProps
) => {
  const { children, className, scrollable, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("sidebar-content");
  const classes = mergeClassName(className, addClassNames(scrollable));

  let childElements = children;
  if (scrollable) {
    childElements = <ScrollbaleWrapper>{children}</ScrollbaleWrapper>;
  }
  return (
    <div className={classes} {...rest}>
      {childElements}
    </div>
  );
};

SidebarContent.displayName = "SidebarContent";
SidebarContent.propTypes = {
  scrollable: PropTypes.bool,
};
SidebarContent.defaultProps = {
  scrollable: false,
};

export default SidebarContent;
