import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { CommonProps, createComponent, useClassName } from "../utils";

export interface HeaderProps extends CommonProps {
  /** Title of the header */
  title?: string;
  /** You can use custom title element for this component */
  renderTitle?: ReactNode;
  /** Extra element on the header */
  extraElements?: ReactNode;
}

/** Main header component  */
const MainHeader = createComponent({
  name: "MainHeader",
  customElement: "div",
});

/** Header custom title component */
const CustomTitle = createComponent({
  name: "HeaderCustomTitle",
  customElement: "div",
});

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {
    children,
    className,
    title,
    renderTitle,
    extraElements,
    ...rest
  } = props;

  const { mergeClassName, addClassNames } = useClassName("header");
  const classes = mergeClassName(className, addClassNames());

  let titleElement: string | React.ReactNode = <h1>{title}</h1>;
  if (renderTitle) {
    titleElement = <CustomTitle>{renderTitle}</CustomTitle>;
  }

  return (
    <div className={classes} {...rest}>
      <MainHeader>{titleElement}</MainHeader>
      {extraElements}
    </div>
  );
};

Header.displayName = "Header";
Header.propTypes = {
  title: PropTypes.string,
  renderTitle: PropTypes.node,
  extraElements: PropTypes.node,
};
export default Header;
