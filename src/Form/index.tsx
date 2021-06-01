import FormComponent from "./Form";
import FormGroup from "./FormGroup";

type FormType = typeof FormComponent;

interface Form extends FormType {
  FormGroup: typeof FormGroup;
}

const Form = FormComponent as Form;
Form.FormGroup = FormGroup;

export * from "./Form";
export default Form;
