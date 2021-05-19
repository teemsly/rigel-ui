import DropdownComponent from "./Dropdown";
import DropdownDivider from "./DropdownDivider";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";

type DropdownType = typeof DropdownComponent;

interface Dropdown extends DropdownType {
  Menu: typeof DropdownMenu;
  Item: typeof DropdownMenuItem;
  Divider: typeof DropdownDivider;
}

const Dropdown = DropdownComponent as Dropdown;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownMenuItem;
Dropdown.Divider = DropdownDivider;

export * from "./Dropdown";
export default Dropdown;
