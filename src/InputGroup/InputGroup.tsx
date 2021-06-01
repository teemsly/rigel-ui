import React, { useCallback, useMemo, useState } from "react";
import { CommonProps, useClassName } from "../utils";

export const InputGroupContext = React.createContext<{
  onFocus: () => void;
  onBlur: () => void;
}>({
  onFocus: () => {},
  onBlur: () => {},
});

export interface InputGroupProps extends CommonProps {
  /** Set the component to be disabled and cannot be entered */
  disabled?: boolean;
  /** Set the component to be error state */
  invalid?: boolean;
}

const InputGroup: React.FC<InputGroupProps> = (props: InputGroupProps) => {
  const { children, className, disabled, invalid, ...rest } = props;

  const [focus, setFocus] = useState(false);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const { mergeClassName, addClassNames } = useClassName("input-group");
  const classes = mergeClassName(className, addClassNames({ focus, invalid }));

  const contextValue = useMemo(
    () => ({ onFocus: handleFocus, onBlur: handleBlur }),
    [handleFocus, handleBlur]
  );

  const childrenDisabled = () => {
    return React.Children.map(children, (child) => {
      console.log(React.isValidElement(child));
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { disabled: true });
      }
      return child;
    });
  };

  return (
    <InputGroupContext.Provider value={contextValue}>
      <div className={classes} {...rest}>
        {disabled ? childrenDisabled() : children}
      </div>
    </InputGroupContext.Provider>
  );
};

export default InputGroup;
