import React, {
  createRef,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ArrowLeft, Times } from "../Icons";
import { CommonProps, createComponent, useClassName } from "../utils";
import { FullScreenProps } from "./FullScreen";

export interface FullScreenHeaderProps extends CommonProps {
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
 * Back action component
 * Wrapper the component for back event
 */
const BackActionComponent = createComponent({
  name: "BackAction",
  customElement: "div",
  classPrefix: "full-screen-header-back",
});

/**
 * Close Action Component
 * Wrapper the component for close event
 */
const CloseActionComponent = createComponent({
  name: "CloseAction",
  customElement: "div",
  classPrefix: "full-screen-header-close",
});

/**
 * Children Wrapper
 * Wrapper for children node
 */
const ChildrenWrapper = createComponent({
  name: "ChildrenWrapper",
  customElement: "div",
  classPrefix: "full-screen-header-children",
});

/**
 * Full Screen Header Component
 *
 * @param props Full screen header props
 * @returns
 */
const FullScreenHeader: React.FC<FullScreenProps> = (
  props: FullScreenHeaderProps
) => {
  const {
    children,
    className,
    back,
    closeable,
    onBackAction,
    onCloseAction,
    ...rest
  } = props;

  const [shadow, setShadow] = useState<boolean>(false);

  const { mergeClassName, addClassNames } = useClassName("full-screen-header");
  const classes = mergeClassName(className, addClassNames({ shadow: shadow }));

  const ref = createRef<HTMLDivElement>();

  const headerShadow = useCallback(
    (e: any) => {
      e?.target?.scrollTop > 60 ? setShadow(true) : setShadow(false);
    },
    [setShadow]
  );

  useEffect(() => {
    let scrollTarget = ref?.current?.parentNode?.querySelector(
      ".ts-full-screen-content-scrollable"
    );
    scrollTarget?.addEventListener("scroll", headerShadow);
  }, []);

  return (
    <header ref={ref} className={classes} {...rest}>
      {back && (
        <BackActionComponent onClick={(e: SyntheticEvent) => onBackAction?.(e)}>
          <ArrowLeft height="20" />
        </BackActionComponent>
      )}
      <ChildrenWrapper>{children}</ChildrenWrapper>
      {closeable && (
        <CloseActionComponent
          onClick={(e: SyntheticEvent) => onCloseAction?.(e)}
        >
          <Times height="20" />
        </CloseActionComponent>
      )}
    </header>
  );
};

FullScreenHeader.displayName = "FullScreenHeader";

export default FullScreenHeader;
