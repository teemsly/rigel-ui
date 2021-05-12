import React, { useContext } from "react";
import PropTypes from "prop-types";
import { PageContext } from "../Page";
import { Menu } from "../Icons";
import { CommonProps, createComponent, useClassName } from "../utils";

export interface TopNavigationProps extends CommonProps {
  /** The header component on the top navigation component */
  header?: React.ReactNode;
  /** The topbar component on the top navigation component */
  topbar?: React.ReactNode;
  /** Show shadow on the bottom of the component */
  shadow?: boolean;
}

const SidebarExpander = createComponent({
  name: "SidebarExpander",
  customElement: "div",
});

const TopNavigation: React.FC<TopNavigationProps> = (
  props: TopNavigationProps
) => {
  const { className, header, topbar, shadow, ...rest } = props;

  const { setMinimizedSidebar } = useContext(PageContext);

  const { mergeClassName, addClassNames } = useClassName("top-navigation");
  const classes = mergeClassName(className, addClassNames({ shadow }));

  const handleExpandeSidebar = () => {
    setMinimizedSidebar?.(false);
  };

  return (
    <div className={classes} {...rest}>
      <SidebarExpander onClick={handleExpandeSidebar}>
        <Menu />
      </SidebarExpander>
      {header}
      {topbar}
    </div>
  );
};

TopNavigation.displayName = "TopNavigation";
TopNavigation.propTypes = {
  header: PropTypes.node,
  topbar: PropTypes.node,
  shadow: PropTypes.bool,
};
TopNavigation.defaultProps = {
  shadow: false,
};

export default TopNavigation;
