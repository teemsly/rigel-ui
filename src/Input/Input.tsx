import React, { HTMLAttributes, useContext } from "react";
import { FormGroupContext } from "../FormGroup";
import { InputGroupContext } from "../InputGroup";
import {
  AnyProps,
  CommonProps,
  createChainedFunction,
  FormBaseProps,
  useClassName,
} from "../utils";

export interface InputProps
  extends CommonProps,
    HTMLAttributes<HTMLInputElement>,
    FormBaseProps<number | string | ReadonlyArray<string>>,
    AnyProps {
  invalid?: boolean;
  id?: string;
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
    id,
    ...rest
  } = props;

  const inputGroupContext = useContext(InputGroupContext);

  const { controlId, isInvalid } = useContext(FormGroupContext);

  const { mergeClassName, addClassNames } = useClassName("input");
  const classes = mergeClassName(
    className,
    addClassNames({ invalid: invalid || isInvalid })
  );

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
      id={id || controlId}
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
