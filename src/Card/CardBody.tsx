import React from "react";
import { CommonProps, useClassName } from "../utils";

export interface CardBodyProps extends CommonProps {}

const CardBody: React.FC<CardBodyProps> = (props: CardBodyProps) => {
  const { children, className, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("card-body");
  const classes = mergeClassName(className, addClassNames());

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

CardBody.displayName = "CardBody";

export default CardBody;
