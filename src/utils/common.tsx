import React from "react";

export interface CommonProps {
  /** The child of the component */
  children?: React.ReactNode;
  /** Classnames of the component */
  className?: string;
  /** CSS styles for the component */
  style?: React.CSSProperties;
}

export interface AnyProps {
  /** This component can assignable with any props. */
  [key: string]: any;
}

export interface WithCustomElement<
  As extends React.ElementType | string = React.ElementType
> extends CommonProps {
  /** You can use custom element for this component */
  customElement: As;
}

export interface FormBaseProps<ValueType = any> {
  /** Initial value of the filed. */
  defaultValue?: ValueType;
  /** Current value of the field, used for controlled component.  */
  value?: ValueType;
  /** Set the field to be disabled and cannot be use any event */
  disabled?: boolean;
  /** Set the field to be readonly */
  readOnly?: boolean;
}

export declare namespace AttributeTypes {
  type Colors = "primary" | "success" | "info" | "warning" | "danger";
  type Size = "xs" | "sm" | "md" | "lg" | "xl";
  type Shape = "rectangle" | "rounded" | "semiCircle";
}
