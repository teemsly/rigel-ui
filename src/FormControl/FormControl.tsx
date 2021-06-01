import React, { useContext } from "react";
import { Input } from "..";
import FormErrorMessage from "../FormErrorMessage";
import { FormGroupContext } from "../FormGroup";
import { CommonProps, FormBaseProps, useClassName } from "../utils";

export interface FormControlProps<P = any, ValueType = any>
  extends CommonProps {
  /** Proxied component */
  controlElement?: React.ElementType<P & FormBaseProps<ValueType>>;
  /** The name of the form field */
  name?: string;
  /** Make the form field to be disabled */
  disabled?: boolean;
  /** Make the form field readonly */
  readOnly?: boolean;
  /** Show the field error message */
  errorMessage?: React.ReactNode;
}

const FormControl = React.forwardRef((props: FormControlProps, ref: any) => {
  const {
    controlElement: FieldControl = Input,
    children,
    className,
    name,
    disabled,
    readOnly,
    errorMessage,
    ...rest
  } = props;

  const { controlId } = useContext(FormGroupContext);

  const { mergeClassName, addClassNames } = useClassName("form-control");
  const classes = mergeClassName(className, addClassNames());

  return (
    <div className={classes}>
      <FieldControl
        ref={ref}
        id={controlId}
        invalid={!!errorMessage}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />

      <FormErrorMessage show={!!errorMessage}>{errorMessage}</FormErrorMessage>
    </div>
  );
});

export default FormControl;
