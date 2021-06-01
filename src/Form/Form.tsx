import React, { HTMLAttributes } from "react";
import { CommonProps, useClassName } from "../utils";

export interface FormProps
  extends CommonProps,
    HTMLAttributes<HTMLFormElement> {}

const Form: React.FC<FormProps> = (props: FormProps) => {
  const { children, className, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("form");
  const classes = mergeClassName(className, addClassNames());

  return (
    <form className={classes} {...rest}>
      {children}
    </form>
  );
};

Form.displayName = "Form";

export default Form;
