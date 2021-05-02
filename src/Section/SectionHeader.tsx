import React from "react";
import { CommonProps, AnyProps, useClassName, createComopnent } from "../utils";
import createComponent from "../utils/createComponent";

/**
 * Section Heading Component
 */
const SectionHeading = createComopnent({
  name: "SectionHeading",
  customElement: "div",
});

/**
 * Section Heading Content Component
 */
const SectionHeadingContent = createComopnent({
  name: "SectionHeadingContent",
  customElement: "div",
});

/**
 * Custom section heading element
 */
const SectionCustomHeading = createComopnent({
  name: "SectionCustomHeading",
  customElement: "div",
});

/**
 * Section heading extra element component
 */
const SectionHeadingExtraElements = createComponent({
  name: "SectionHeadingExtraElements",
  customElement: "div",
});

/**
 * Section collapse component
 */
const SectionCollapse = createComponent({
  name: "SectionCollapse",
  customElement: "div",
});

export interface SectionHeaderProps extends CommonProps, AnyProps {
  /** Heading of the section */
  heading?: string;
  /** You can use custom heading element */
  renderHeading?: (children?: React.ReactNode) => React.ReactNode;
  /** Extra elements on heading */
  extraElements?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = (
  props: SectionHeaderProps
) => {
  const {
    customElement: Component = "div",
    children,
    className,
    heading,
    renderHeading,
    extraElements,
    handleCollapse,
    collapsible,
    ...rest
  } = props;

  const { mergeClassName, addClassNames } = useClassName("section-header");

  const classes = mergeClassName(className, addClassNames());

  let headingProps: any = {};
  if (handleCollapse) {
    headingProps = {
      onClick: handleCollapse,
    };
  }
  let getHeading: string | React.ReactNode = (
    <SectionHeading>
      <SectionHeadingContent {...headingProps}>{heading}</SectionHeadingContent>
    </SectionHeading>
  );
  if (renderHeading) {
    getHeading = (
      <SectionCustomHeading>
        <SectionHeadingContent {...headingProps}>
          {renderHeading}
        </SectionHeadingContent>
      </SectionCustomHeading>
    );
  }

  let collapseElement: React.ReactNode;
  if (collapsible) {
    collapseElement = <SectionCollapse onClick={handleCollapse} />;
  }

  return (
    <Component className={classes} {...rest}>
      {collapseElement}
      {getHeading}
      <SectionHeadingExtraElements>{extraElements}</SectionHeadingExtraElements>
    </Component>
  );
};

export default SectionHeader;
