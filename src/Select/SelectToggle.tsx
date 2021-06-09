import React from "react";
import {
  AnyProps,
  CommonProps,
  createChainedFunction,
  useClassName,
} from "../utils";

export interface SelectToggleProps extends CommonProps, AnyProps {
  /** The placeholder of the field */
  placeholder?: string;
  /** Show caret icon */
  caret?: boolean;
  /** Render custom element for this component */
  renderToggle?: () => React.ReactNode;
}

const SelectToggle = React.forwardRef((props: SelectToggleProps, ref: any) => {
  const {
    className,
    placeholder,
    caret,
    onClick,
    selectedOption,
    handleToggle,
    renderSelected,
    ...rest
  } = props;

  const { mergeClassName, addClassNames, setPrefix } = useClassName(
    "select-toggle"
  );
  const classes = mergeClassName(className, addClassNames());

  const placeholderClass = setPrefix("placeholder");
  const iconClass = setPrefix("icon");
  const selectedClass = setPrefix("selected");

  let selectedElement: React.ReactNode;
  if (selectedOption) {
    selectedElement = renderSelected ? (
      renderSelected(selectedOption)
    ) : (
      <div className={selectedClass}>{selectedOption?.label}</div>
    );
  } else if (placeholder) {
    selectedElement = <div className={placeholderClass}>{placeholder}</div>;
  } else {
    selectedElement = <div></div>;
  }

  return (
    <div
      ref={ref}
      className={classes}
      onClick={createChainedFunction(onClick, handleToggle)}
      {...rest}
    >
      {selectedElement}
      {caret && <div className={iconClass}>V</div>}
    </div>
  );
});

export default SelectToggle;
