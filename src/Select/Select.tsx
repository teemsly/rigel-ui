import _ from "lodash";
import React, { useCallback, useRef, useState } from "react";
import { CommonProps, overlayClose, useClassName } from "../utils";
import SelectOptions from "./SelectOptions";
import SelectToggle from "./SelectToggle";

export type OptionType = {
  label: string | number;
  value: string | number;
  [key: string]: any;
};

export interface SelectProps<Options = OptionType, Value = string | number>
  extends CommonProps {
  /** The data options */
  options?: Options[];
  /** Show the option menu */
  show?: boolean;
  /** Show caret icon on the toggler */
  caret?: boolean;
  /** The placeholder on the component */
  placeholder?: string;
  /** Default value */
  defaultValue?: Value;
  /** Value  */
  value?: Value;
  /** Option group by */
  groupBy?: Value;
  /** The field name */
  name?: string;
  /** Callback when select option menu is show */
  onShow?: () => void;
  /** Callback when select option menu is hide */
  onHide?: () => void;
  /** Callback when value has changed */
  onChange?: (value: Value) => void;
  /** Use custom element when options is selected */
  renderSelected?: (option: Options) => void;
  /** Use custom element for header options */
  renderGroupBy: (groupBy: Value, option: Options) => void;
  /** Use custom element for menu options */
  renderMenuOptions: (options: Options[]) => void;
  /** Use custom element for selected option on the menu options */
  renderSelectedOption: (option: Options) => void;
}

const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const {
    children,
    placeholder,
    className,
    options,
    name,
    onChange,
    onShow,
    onHide,
    caret,
    defaultValue: defaultValueProps,
    value: valueProps,
    groupBy,
    renderSelected,
    renderGroupBy,
    renderSelectedOption,
    ...rest
  } = props;

  const [showOption, setShowOption] = useState<boolean>(false);

  const [defaultValue] = useState(defaultValueProps);

  const [value, setValue] = useState(valueProps);

  const [selectedOption, setSelectedOption] = useState<OptionType>();

  const toggleRef = useRef();

  const overlayRef = useRef();

  const { mergeClassName, addClassNames } = useClassName("select");
  const classes = mergeClassName(
    className,
    addClassNames({ show: showOption })
  );

  const handleToggle = useCallback(
    (isShow?: boolean) => {
      const showState = _.isUndefined(isShow) ? !showOption : isShow;
      const fn = showState ? onShow : onHide;

      fn?.();
      setShowOption(showState);
    },
    [setShowOption, showOption, onShow, onHide]
  );

  overlayClose(() => handleToggle(), {
    triggerTarget: toggleRef,
    overlayTarget: overlayRef,
    disabled: !showOption,
  });

  const handleSelectOption = useCallback((options: OptionType) => {
    setValue(options?.value);
    setSelectedOption(options);
    onChange?.(options?.value);
    handleToggle?.(false);
  }, []);

  let selectToggleProps = {
    placeholder,
    caret,
  };

  const selectToggle = (
    <SelectToggle
      ref={toggleRef}
      {...selectToggleProps}
      handleToggle={handleToggle}
      selectedOption={selectedOption}
      renderSelected={renderSelected}
    />
  );

  const selectOptionsMenu = (
    <SelectOptions
      ref={overlayRef}
      options={options}
      handleSelect={handleSelectOption}
      defaultValue={defaultValue}
      value={value}
      groupBy={groupBy}
      renderSelectedOption={renderSelectedOption}
    />
  );

  let inputProps = {
    value: valueProps,
  };

  return (
    <div className={classes} {...rest}>
      {selectToggle}
      {selectOptionsMenu}
      <input
        type="hidden"
        name={name}
        defaultValue={defaultValue}
        {...inputProps}
      />
    </div>
  );
};

Select.displayName = "Select";
export default Select;
