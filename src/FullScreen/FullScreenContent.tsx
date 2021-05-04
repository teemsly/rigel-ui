import React from "react";
import PropType from "prop-types";
import { CommonProps, useClassName } from "../utils";

export interface FullScreenContentProps extends CommonProps {
  /** Scrollable of content */
  scrollable?: boolean;
}

const FullScreenContent: React.FC<FullScreenContentProps> = (
  props: FullScreenContentProps
) => {
  const { children, className, scrollable, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("full-screen-content");
  const classes = mergeClassName(
    className,
    addClassNames({ scrollable: scrollable })
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

FullScreenContent.displayName = "FullScreenContent";

FullScreenContent.propTypes = {
  scrollable: PropType.bool,
};

FullScreenContent.defaultProps = {
  scrollable: false,
};

export default FullScreenContent;
