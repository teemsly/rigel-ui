import React from "react";
import { CommonProps, useClassName } from "../utils";

export interface FormGroupProps extends CommonProps {
  /** Form field label */
  label?: string;
  /** Label for field */
  labelFor?: string;
}

const FormGroup: React.FC<FormGroupProps> = (props: FormGroupProps) => {
  const { children, className, label, labelFor, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("form-group");
  const classes = mergeClassName(className, addClassNames());

  const getElements = () => {
    const elements = React.Children.map(
      children,
      (element: any, index: number) => {
        let fieldProps = {};

        if (labelFor) {
          fieldProps = {
            id: labelFor,
          };
        }

        return React.cloneElement(element, {
          key: index,
          ...fieldProps,
          ...element?.props,
        });
      }
    );

    return { elements };
  };

  const { elements } = getElements();

  return (
    <div className={classes} {...rest}>
      <label htmlFor={labelFor}>{label}</label>
      {elements}
    </div>
  );
};

export default FormGroup;
