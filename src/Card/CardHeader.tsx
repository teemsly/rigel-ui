import React from "react";
import { CommonProps, useClassName } from "../utils";

export interface CardHeaderProps extends CommonProps {}

const CardHeader: React.FC<CardHeaderProps> = (props: CardHeaderProps) => {
  const { children, className, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("card-header");
  const classes = mergeClassName(className, addClassNames());

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

CardHeader.displayName = "CardHeader";

export default CardHeader;
