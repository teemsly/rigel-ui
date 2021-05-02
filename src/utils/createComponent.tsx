import React, { HTMLAttributes } from "react";
import _ from "lodash";
import { useClassName, AnyProps, CommonProps, WithCustomElement } from ".";

export interface CreateComponentProps extends CommonProps {
  /** Name of the component */
  name: string;
  /** Element of the component */
  customElement: React.ElementType;
  /** Class prefix of the component */
  classPrefix?: string;
}

export type ComponentProps = WithCustomElement &
  AnyProps &
  HTMLAttributes<HTMLDivElement>;

/**
 * createComponent({name: "NameOfComponent", customElement: 'div', classPrefix: 'name-of-component'})
 * Create component instanly
 */
const createComponent = (defaultProps: CreateComponentProps) => {
  const {
    customElement,
    name,
    classPrefix,
    ...componentRestProps
  } = defaultProps;

  const Component = React.forwardRef((props: ComponentProps, ref) => {
    const {
      customElement: Component,
      children,
      className,
      classPrefix,
      ...rest
    } = props;
    const { mergeClassName, addClassNames } = useClassName(classPrefix);
    const classes = mergeClassName(className, addClassNames());

    return (
      <Component ref={ref} className={classes} {...rest}>
        {children}
      </Component>
    );
  });

  Component.displayName = name;
  Component.defaultProps = {
    ...componentRestProps,
    customElement: customElement || "div",
    classPrefix: classPrefix || _.kebabCase(name),
  };
  return Component;
};

export default createComponent;
