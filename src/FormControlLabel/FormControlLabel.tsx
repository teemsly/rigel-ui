import React, { useContext } from "react";
import { FormGroupContext } from "../FormGroup";
import { CommonProps, useClassName } from "../utils";

export interface FormControlLabelProps extends CommonProps {
  as?: React.ElementType;
  htmlFor?: string;
}

const FormControlLabel: React.FC<FormControlLabelProps> = (
  props: FormControlLabelProps
) => {
  const {
    as: Component = "label",
    children,
    className,
    htmlFor,
    ...rest
  } = props;

  const { controlId } = useContext(FormGroupContext);
  const { mergeClassName, addClassNames } = useClassName("form-control-label");
  const classes = mergeClassName(className, addClassNames());

  return (
    <Component className={classes} htmlFor={htmlFor || controlId} {...rest}>
      {children}
    </Component>
  );
};

export default FormControlLabel;
