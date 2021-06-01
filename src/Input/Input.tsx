import React, { HTMLAttributes, useContext } from "react";
import { InputGroupContext } from "../InputGroup";
import {
  AnyProps,
  CommonProps,
  createChainedFunction,
  useClassName,
} from "../utils";

export interface InputProps
  extends CommonProps,
    HTMLAttributes<HTMLInputElement>,
    AnyProps {
  invalid?: boolean;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    children,
    className,
    invalid,
    disabled,
    readOnly,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const inputGroupContext = useContext(InputGroupContext);

  const { mergeClassName, addClassNames } = useClassName("input");
  const classes = mergeClassName(className, addClassNames({ invalid }));

  const eventProps: HTMLAttributes<HTMLInputElement> = {};

  const isOperable = !disabled && !readOnly;

  if (isOperable) {
    eventProps.onFocus = createChainedFunction(
      onFocus,
      inputGroupContext?.onFocus
    );
    eventProps.onBlur = createChainedFunction(
      onBlur,
      inputGroupContext?.onBlur
    );
  }

  return (
    <input
      className={classes}
      disabled={disabled}
      readOnly={readOnly}
      {...rest}
      {...eventProps}
    />
  );
};

Input.displayName = "Input";
Input.defaultProps = {
  type: "text",
};
export default Input;
