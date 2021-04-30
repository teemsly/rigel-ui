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

export interface WithCustomElement {
  /** You can use custom element for this component */
  customElement?: any;
}
