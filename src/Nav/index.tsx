import NavComponent from "./Nav";
import NavItem from "./NavItem";

type NavType = typeof NavComponent;
interface Nav extends NavType {
  Item: typeof NavItem;
}

const Nav = NavComponent as Nav;
Nav.Item = NavItem;

export * from "./NavItem";
export * from "./Nav";
export default Nav;
