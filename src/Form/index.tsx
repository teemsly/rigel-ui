import FormComponent from "./Form";
import FormGroup from "../FormGroup";
import FormControlLabel from "../FormControlLabel";
import FormControl from "../FormControl";

type FormType = typeof FormComponent;

interface Form extends FormType {
  Control: typeof FormControl;
  FormGroup: typeof FormGroup;
  Label: typeof FormControlLabel;
}

const Form = FormComponent as Form;
Form.Control = FormControl;
Form.FormGroup = FormGroup;
Form.Label = FormControlLabel;

export * from "./Form";
export default Form;
