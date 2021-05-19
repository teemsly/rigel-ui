import _ from "lodash";
import React, { useCallback, useRef, useState } from "react";
import {
  AnyProps,
  CommonProps,
  createChainedFunction,
  overlayClose,
  useClassName,
} from "../utils";
import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";

export interface DropdownProps<T = string> extends CommonProps, AnyProps {
  /** The active key of the dropdown option */
  activeKey?: T;
  /** Callback when active key is change by item event key */
  onActiveKeyChange?: (eventKey: T) => void;
  /** Dropdown toggle */
  toggle?: string;
  /** Render custom toggle */
  renderToggle?: (children: React.ReactNode) => React.ReactNode;
  /** Callback when the dropdown open */
  onToggle?: (open: boolean) => void;
  /** State to dropdown is open or not */
  open?: boolean;
  /** Callback when dropdown open */
  onOpen?: () => void;
  /** Callback when dropdown is closed */
  onClose?: () => void;
  /** Dropdown menu css styles */
  menuStyle?: React.CSSProperties;
  /** Placement */
  placement?:
    | "bottomStart"
    | "bottomEnd"
    | "topStart"
    | "topEnd"
    | "leftStart"
    | "leftEnd"
    | "rightStart"
    | "rightEnd";
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const {
    activeKey: activeKeyProps,
    onActiveKeyChange,
    children,
    className,
    toggle,
    renderToggle,
    onToggle,
    open: openProps,
    onClick,
    onOpen,
    onClose,
    menuStyle,
    placement,
    ...rest
  } = props;

  const toggleRef = useRef();

  const overlayTarget = useRef();

  const [open, setOpen] = useState<boolean>(openProps || false);

  const [activeKey, setActiveKey] = useState(activeKeyProps);

  const { mergeClassName, addClassNames } = useClassName("dropdown");
  const classes = mergeClassName(
    className,
    addClassNames(_.kebabCase(placement), { open })
  );

  const handleOnToggle = useCallback(
    (isOpen?: boolean) => {
      const openState = _.isUndefined(isOpen) ? !open : isOpen;
      const fn = openState ? onOpen : onClose;

      fn?.();
      setOpen(openState);
      onToggle?.(openState);
    },
    [open, setOpen, onOpen, onClose]
  );

  overlayClose(() => handleOnToggle(), {
    triggerTarget: toggleRef,
    overlayTarget,
    disabled: !open,
  });

  const toggleClick = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      handleOnToggle();
    },
    [handleOnToggle]
  );

  const handleSelect = useCallback(
    (eventKey: string) => {
      setActiveKey(eventKey);
      onActiveKeyChange?.(eventKey);
      handleOnToggle(false);
    },
    [handleOnToggle]
  );

  let dropdownToggleProps = {
    onClick: createChainedFunction(toggleClick, onClick),
  };

  const dropdownToggleElement = (
    <DropdownToggle
      ref={toggleRef}
      renderToggle={renderToggle}
      {...dropdownToggleProps}
    >
      {toggle}
    </DropdownToggle>
  );

  const dropdownMenuElement = (
    <DropdownMenu
      ref={overlayTarget}
      style={menuStyle}
      activeKey={activeKey}
      onSelect={handleSelect}
    >
      {children}
    </DropdownMenu>
  );

  return (
    <div className={classes} {...rest}>
      {dropdownToggleElement}
      {dropdownMenuElement}
    </div>
  );
};

Dropdown.displayName = "Dropdown";
Dropdown.defaultProps = {
  placement: "bottomStart",
};

export default Dropdown;
