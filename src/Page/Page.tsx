import React, { createContext, HTMLAttributes, useState } from "react";
import { CommonProps, createComponent, useClassName } from "../utils";

/**
 * The Page Context
 */
export const PageContext = createContext<PageContextValue>({});

/**
 * Page context value
 */
export interface PageContextValue {
  setHasSidebar?: (value: boolean) => void;
  setMinimizedSidebar?: (value: boolean) => void;
}

/** Page Main Component */
const PageMain = createComponent({ name: "PageMain", customElement: "div" });

/** Page Main Layer Component */
const PageMainLayer = createComponent({
  name: "PageMainLayer",
  customElement: "div",
});

/**
 * Page Props
 */
export interface PageProps
  extends CommonProps,
    HTMLAttributes<HTMLDivElement> {}

/** Page Component */
const Page: React.FC<PageProps> = (props: PageProps) => {
  const { children, className, ...rest } = props;

  const [hasSidebar, setHasSidebar] = useState<boolean>(false);
  const [minimizedSidebar, setMinimizedSidebar] = useState<boolean>(false);

  const { mergeClassName, addClassNames } = useClassName("page");
  const classes = mergeClassName(
    className,
    addClassNames({
      "has-sidebar": hasSidebar,
      "sidebar-minimized": minimizedSidebar,
    })
  );

  return (
    <PageContext.Provider value={{ setHasSidebar, setMinimizedSidebar }}>
      <div className={classes} {...rest}>
        <PageMain>
          <PageMainLayer>{children}</PageMainLayer>
        </PageMain>
      </div>
    </PageContext.Provider>
  );
};

Page.displayName = "Page";

export default Page;
