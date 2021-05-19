import React, { SyntheticEvent, useCallback } from "react";
import {
  AnyProps,
  CommonProps,
  createChainedFunction,
  useClassName,
} from "../utils";

export interface DropdownMenuItemProps extends CommonProps, AnyProps {
  /** Active state of the item option */
  active?: boolean;
  /** The option event key  */
  eventKey?: string;
  /** The specified url path */
  href?: string;
  /** On select item callback */
  onSelect?: (eventKey?: string, event?: SyntheticEvent) => void;
  /** You can use custom element for this component */
  customElement?: React.ElementType;
}

const DropdownMenuItem = React.forwardRef(
  (props: DropdownMenuItemProps, ref: any) => {
    const {
      active,
      customElement: Component = "div",
      children,
      className,
      eventKey,
      onClick,
      onSelect,
      ...rest
    } = props;

    const { mergeClassName, addClassNames } = useClassName(
      "dropdown-menu-item"
    );
    const classes = mergeClassName(className, addClassNames({ active }));

    const handleSelect = useCallback(
      (event: SyntheticEvent) => {
        onSelect?.(eventKey, event);
      },
      [onSelect, eventKey]
    );

    return (
      <Component
        ref={ref}
        className={classes}
        onClick={createChainedFunction(handleSelect, onClick)}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

DropdownMenuItem.displayName = "DropdownMenuItem";
DropdownMenuItem.defaultProps = {
  active: false,
  customElement: "div",
};

export default DropdownMenuItem;
