import React from "react";
import PropType from "prop-types";
import { CommonProps, useClassName, createComponent } from "../utils";
import { kebabCase } from "lodash";

export interface TileProps extends CommonProps {
  /** Title of tile */
  title?: string;
  /** Subtitle of the title */
  subtitle?: string;
  /** Border style for the children */
  border?: "borderSolid" | "borderDashed" | "borderNone";
}

const TileTitle = createComponent({ name: "TileTitle", customElement: "div" });

const TileSubtitle = createComponent({
  name: "TileSubtitle",
  customElement: "div",
});

const TileChildren = createComponent({
  name: "TileChildren",
  customElement: "div",
});

const Tile: React.FC<TileProps> = (props: TileProps) => {
  const { className, title, subtitle, children, border, ...rest } = props;

  const { mergeClassName, addClassNames } = useClassName("tile");
  const classes = mergeClassName(className, addClassNames(kebabCase(border)));

  return (
    <div className={classes} {...rest}>
      <TileChildren>{children}</TileChildren>
      <TileTitle>{title}</TileTitle>
      <TileSubtitle>{subtitle}</TileSubtitle>
    </div>
  );
};

Tile.displayName = "Tile";

Tile.propTypes = {
  title: PropType.string,
  subtitle: PropType.string,
  border: PropType.oneOf(["borderSolid", "borderDashed", "borderNone"]),
};

Tile.defaultProps = {
  border: "borderDashed",
};

export default Tile;
