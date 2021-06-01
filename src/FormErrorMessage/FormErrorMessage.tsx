import React from "react";
import { CommonProps, useClassName } from "../utils";

export interface FormErrorMessageProps extends CommonProps {
  show?: boolean;
}

const FormErrorMessage: React.FC<FormErrorMessageProps> = (
  props: FormErrorMessageProps
) => {
  const { children, className, show, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("form-error-message");
  const classes = mergeClassName(className, addClassNames());

  if (!show) {
    return null;
  }

  return (
    <div className={classes} {...rest}>
      <span>{children}</span>
    </div>
  );
};

FormErrorMessage.displayName = "FormErrorMessage";
export default FormErrorMessage;
