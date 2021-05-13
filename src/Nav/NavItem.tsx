import React from "react";
import { Anchor } from "..";
import { CommonProps, useClassName } from "../utils";

export interface NavItemProps extends CommonProps {
  /** Hyperlink to the specified url. */
  href?: string;
  /** The event key of the option*/
  eventKey?: string;
  /** Active state of the option*/
  active?: boolean;
}

const NavItem = React.forwardRef((props: NavItemProps, ref) => {
  const { children, className, href, active, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("nav-item");
  const classes = mergeClassName(className, addClassNames({ active }));

  let itemElement = children;
  if (href) {
    itemElement = <Anchor href={href}>{children}</Anchor>;
  }

  return (
    <div ref={() => ref} className={classes} {...rest}>
      {itemElement}
    </div>
  );
});

NavItem.displayName = "NavItem";
NavItem.defaultProps = {
  active: false,
};

export default NavItem;
