import React from "react";
import { CommonProps, useClassName } from "../utils";

export interface CardImageProps extends CommonProps {}

const CardImage: React.FC<CardImageProps> = (props: CardImageProps) => {
  const { children, className, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("card-image");
  const classes = mergeClassName(className, addClassNames());

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default CardImage;
