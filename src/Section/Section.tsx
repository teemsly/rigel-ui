import React, { useEffect, useState } from "react";
import { AnyProps, CommonProps, useClassName } from "../utils";

export interface SectionProps extends CommonProps, AnyProps {
  /** The collapsible body of the section */
  collapsible?: boolean;
  /** On collapse event callback  */
  onCollapsible?: (isCollapse: boolean) => void;
  /** Set the section to collpased of content */
  isCollapse?: boolean;
}

const Section: React.FC<SectionProps> = (props: SectionProps) => {
  const {
    customElement: Component = "div",
    children,
    className,
    collapsible = false,
    onCollapsible,
    isCollapse,
    ...rest
  } = props;

  const [collapse, setCollapse] = useState<boolean>(false);

  useEffect(() => {
    isCollapse ? setCollapse(true) : setCollapse(false);
  }, [isCollapse]);

  const { mergeClassName, addClassNames } = useClassName("section");
  const classes = mergeClassName(
    className,
    addClassNames({ collpased: collapse, collapsible: collapsible })
  );

  const handleCollapse = () => {
    setCollapse(!collapse);
    if (onCollapsible) {
      onCollapsible?.(collapse);
    }
  };

  const getChildElements = () => {
    const elements = React.Children.map(
      children,
      (child: any, index: number) => {
        let displayName = child?.type?.displayName;

        if (displayName === "SectionHeader") {
          return React.cloneElement(child, {
            key: index,
            collapsible: collapsible,
            handleCollapse: handleCollapse,
            ...child?.props,
          });
        }

        return React.cloneElement(child, {
          key: index,
          ...child?.props,
        });
      }
    );

    return { elements };
  };

  const { elements } = getChildElements();

  return (
    <Component className={classes} {...rest}>
      {elements}
    </Component>
  );
};

export default Section;
