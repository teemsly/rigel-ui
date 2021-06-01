import InputGroupComponent from "./InputGroup";
import InputGroupAddon from "./InputGroupAddon";

type InputGroupType = typeof InputGroupComponent;

interface InputGroup extends InputGroupType {
  Addon: typeof InputGroupAddon;
}

const InputGroup = InputGroupComponent as InputGroup;
InputGroup.Addon = InputGroupAddon;

export * from "./InputGroup";
export default InputGroup;
