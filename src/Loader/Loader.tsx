import React from "react";
import { CommonProps, createComponent, useClassName } from "../utils";

export interface LoaderProps extends CommonProps {
  /** The loader text */
  placeholder?: string;
}

/**
 * Loader indicator
 * The spinner loader indicator
 */
const LoaderIndicator = createComponent({
  name: "LoaderIndicator",
  customElement: "div",
});

/**
 * Loader Text
 * The loader text placeholder
 */
const LoaderText = createComponent({
  name: "LoaderText",
  customElement: "span",
});

const Loader: React.FC<LoaderProps> = (props: LoaderProps) => {
  const { className, placeholder, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("loader");
  const classes = mergeClassName(className, addClassNames());

  return (
    <div className={classes} {...rest}>
      <LoaderIndicator />
      <LoaderText>{placeholder}</LoaderText>
    </div>
  );
};

export default Loader;
