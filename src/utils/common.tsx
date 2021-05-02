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

// export interface WithComponentAs<As extends React.ElementType | string = React.ElementType> extends CommonProps {

export interface WithCustomElement<
  As extends React.ElementType | string = React.ElementType
> extends CommonProps {
  /** You can use custom element for this component */
  customElement: As;
}