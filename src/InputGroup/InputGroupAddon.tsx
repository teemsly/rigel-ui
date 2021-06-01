import React from "react";
import { CommonProps, useClassName } from "../utils";

export interface InputGroupAddonProps extends CommonProps {}

const InputGroupAddon: React.FC<InputGroupAddonProps> = (
  props: InputGroupAddonProps
) => {
  const { children, className, ...rest } = props;
  const { mergeClassName, addClassNames } = useClassName("input-group-addon");
  const classes = mergeClassName(className, addClassNames());

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default InputGroupAddon;
