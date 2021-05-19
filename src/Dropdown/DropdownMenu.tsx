import React from "react";
import {
  AnyProps,
  CommonProps,
  createChainedFunction,
  useClassName,
} from "../utils";

export interface DropdownMenuProps extends CommonProps, AnyProps {
  /** Dropdown active key options */
  activeKey?: string;
}

const DropdownMenu = React.forwardRef((props: DropdownMenuProps, ref: any) => {
  const { children, className, onSelect, activeKey, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("dropdown-menu");
  const classes = mergeClassName(className, addClassNames());

  const getChildElements = () => {
    const elements = React.Children.map(
      children,
      (child: any, index: number) => {
        if (!child) {
          return null;
        }
        let displayName = child?.type?.displayName;

        if (displayName === "DropdownMenuItem") {
          const { onSelect: onSelectItem } = props;

          let activeProps = {
            active: activeKey === child?.props?.eventKey ? true : false,
          };

          return React.cloneElement(child, {
            key: index,
            onSelect: createChainedFunction(onSelect, onSelectItem),
            ...activeProps,
            ...child?.props,
          });
        }

        return React.cloneElement(child, {
          key: index,
          ...child?.props,
        });
      }
    );

    return { elements };
  };

  const { elements } = getChildElements();

  return (
    <div ref={ref} className={classes} {...rest}>
      {elements}
    </div>
  );
});

DropdownMenu.displayName = "DropdownMenu";

export default DropdownMenu;
