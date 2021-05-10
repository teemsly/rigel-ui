import React from "react";
import { AttributeTypes, CommonProps, useClassName } from "../utils";

export interface AvatarProps extends CommonProps {
  /** Avatar background color */
  color?: AttributeTypes.Colors;
  /** Avatar size */
  size?: AttributeTypes.Size;
  /** Avatar shape type */
  shape?: "rounded" | "circle" | "square";
  /** Avatar specified url to the image */
  src?: string;
  /** Alt attribute for the image avatar */
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const {
    className,
    children,
    color,
    size,
    shape,
    src,
    alt,
    style,
    ...rest
  } = props;

  const { mergeClassName, addClassNames, setPrefix } = useClassName("avatar");
  const classes = mergeClassName(className, addClassNames(color, size, shape));

  let childElement = <span>{children}</span>;

  const avatarImageStyles = {
    ...style,
    backgroundImage: `url(${src})`,
  };

  console.log(src);

  if (src) {
    childElement = (
      <div className={setPrefix("image")} style={avatarImageStyles}></div>
    );
  }

  return (
    <div className={classes} {...rest}>
      {childElement}
    </div>
  );
};

Avatar.displayName = "Avatar";
Avatar.defaultProps = {
  size: "sm",
  shape: "circle",
};

export default Avatar;
