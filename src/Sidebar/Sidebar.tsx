import React, { useContext, useEffect } from "react";
import { PageContext } from "../Page";
import { CommonProps, useClassName } from "../utils";

export interface SidebarProps extends CommonProps {}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { children, className, ...rest } = props;
  const { setHasSidebar, setMinimizedSidebar } = useContext(PageContext);

  const { mergeClassName, addClassNames } = useClassName("sidebar");
  const classes = mergeClassName(className, addClassNames());

  // hook to the Page component that the child has a sidebar.
  useEffect(() => {
    setHasSidebar?.(true);
  }, [setHasSidebar]);

  // Handle minimize the sidebars
  const handleMinimize = () => {
    setMinimizedSidebar?.(true);
  };

  const getElememts = () => {
    const elements = React.Children.map(
      children,
      (child: any, index: number) => {
        let displayName = child?.type?.displayName;

        if (displayName === "SidebarHeader") {
          return React.cloneElement(child, {
            key: index,
            handleMinimize,
            ...child?.props,
          });
        }
        return React.cloneElement(child, { key: index, ...child?.props });
      }
    );
    return { elements };
  };

  const { elements } = getElememts();

  return (
    <aside className={classes} {...rest}>
      {elements}
    </aside>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
