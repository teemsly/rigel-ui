import React, { createContext } from "react";
import { CommonProps, useClassName } from "../utils";

export const FormGroupContext = createContext<{
  controlId?: string;
  isInvalid?: boolean;
}>({
  controlId: "",
  isInvalid: false,
});

export interface FormGroupProps extends CommonProps {
  /** Label for field */
  id?: string;
  /** Invalid state of the component */
  isInvalid?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = (props: FormGroupProps) => {
  const { children, className, id, isInvalid, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("form-group");
  const classes = mergeClassName(className, addClassNames());

  return (
    <FormGroupContext.Provider value={{ controlId: id, isInvalid: isInvalid }}>
      <div className={classes} {...rest}>
        {children}
      </div>
    </FormGroupContext.Provider>
  );
};

FormGroup.displayName = "FormGroup";

export default FormGroup;
