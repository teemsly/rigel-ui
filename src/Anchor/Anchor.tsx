import React, { SyntheticEvent } from "react";
import { CommonProps } from "../utils";

export interface AnchorProps extends CommonProps {
  /** The specified path of the url */
  href?: string;
  /** On Click action */
  onClick?: (e: SyntheticEvent) => void;
}

const Anchor: React.FC<AnchorProps> = (props: AnchorProps) => {
  const { className, children, href, ...rest } = props;
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

export default Anchor;
