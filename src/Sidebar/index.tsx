import SidebarComponent from "./Sidebar";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

type SidebarType = typeof SidebarComponent;

interface Sidebar extends SidebarType {
  Header: typeof SidebarHeader;
  Content: typeof SidebarContent;
  Footer: typeof SidebarFooter;
}

const Sidebar = SidebarComponent as Sidebar;
Sidebar.Header = SidebarHeader;
Sidebar.Content = SidebarContent;
Sidebar.Footer = SidebarFooter;

export * from "./Sidebar";
export default Sidebar;
