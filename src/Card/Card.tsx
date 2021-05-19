import React from "react";
import { CommonProps, useClassName } from "../utils";

export interface CardProps extends CommonProps {}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { children, className, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("card");
  const classes = mergeClassName(className, addClassNames());

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Card.displayName = "Card";

export default Card;
