import React, { SyntheticEvent } from "react";
import { CommonProps, createComponent, useClassName } from "../utils";

export interface FullScreenProps extends CommonProps {
  /** The full screen is closeable, and show the close icon */
  closeable?: boolean;
  /** The full screen show back icon and event */
  back?: boolean;
  /** On back action event */
  onBackAction?: (event: SyntheticEvent) => void;
  /** On clise action event */
  onCloseAction?: (event: SyntheticEvent) => void;
}

/**
 * Full Screeen Wrapper
 * This component as the component main wrapper
 */
const FullScreenWrapper = createComponent({
  name: "FullScreenWrapper",
  customElement: "div",
});

const FullScreen: React.FC<FullScreenProps> = (props: FullScreenProps) => {
  const {
    className,
    children,
    closeable,
    back,
    onCloseAction,
    onBackAction,
    ...rest
  } = props;

  const { mergeClassName, addClassNames } = useClassName("full-screen");
  const classes = mergeClassName(className, addClassNames());

  const getElements = () => {
    const elements = React.Children.map(children, (child: any, _: number) => {
      let displayName = child?.type?.displayName;

      if (displayName === "FullScreenHeader") {
        return React.cloneElement(child, {
          closeable,
          back,
          onCloseAction,
          onBackAction,
          ...child?.props,
        });
      }

      return React.cloneElement(child, { ...child?.props });
    });

    return { elements };
  };

  const { elements } = getElements();

  return (
    <div className={classes} {...rest}>
      <FullScreenWrapper>{elements}</FullScreenWrapper>
    </div>
  );
};

FullScreen.displayName = "FullScreen";

export default FullScreen;
