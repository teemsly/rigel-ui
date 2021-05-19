import React from "react";
import { CommonProps, useClassName } from "../utils";

export interface CardFooterProps extends CommonProps {}

const CardFooter: React.FC<CardFooterProps> = (props: CardFooterProps) => {
  const { children, className, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("card-footer");
  const classes = mergeClassName(className, addClassNames());

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

CardFooter.displayName = "CardFooter";

export default CardFooter;
