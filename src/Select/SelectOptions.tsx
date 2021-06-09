import React, { useEffect } from "react";
import _ from "lodash";
import classnames from "classnames";
import { AnyProps, CommonProps, useClassName } from "../utils";
import { OptionType } from "./Select";

export interface SelectOptionsProps extends CommonProps, AnyProps {
  /** The data option */
  options?: OptionType[];
}

const SelectOptions = React.forwardRef(
  (props: SelectOptionsProps, ref: any) => {
    const {
      children,
      className,
      options,
      handleSelect,
      defaultValue,
      groupBy,
      value,
      renderGroupBy,
      renderSelectedOption,
      ...rest
    } = props;

    const { mergeClassName, addClassNames, setPrefix } = useClassName(
      "select-options-menu"
    );
    const classes = mergeClassName(className, addClassNames());
    const optionClass = setPrefix("item");
    const optionWrapperClass = setPrefix("group-wrapper");
    const optionGroupClass = setPrefix("group");

    let optionValue = value || defaultValue;

    const handleSelectedOption = () => {
      let selected = _.find(options, (opt: any) => {
        return opt.value === optionValue;
      });
      handleSelect(selected);
    };

    useEffect(() => {
      if (optionValue) {
        handleSelectedOption();
      }
    }, [optionValue]);

    const itemOptions = groupBy ? _.groupBy(options, groupBy) : options;

    const renderOptionGroup = (key: any) => {
      if (renderGroupBy) {
        return renderGroupBy(key);
      }
      return <div className={optionGroupClass}>{key}</div>;
    };

    const renderItemOption = (option: OptionType, key: any) => {
      return (
        <div
          key={key}
          className={classnames(
            optionClass,
            optionValue === option?.value && "active"
          )}
          onClick={() => handleSelect(option)}
        >
          {renderSelectedOption ? renderSelectedOption(option) : option.label}
        </div>
      );
    };

    return (
      <div ref={ref} className={classes} {...rest}>
        {_.map(itemOptions, (options: any, key: any) => {
          if (groupBy) {
            return (
              <div className={optionWrapperClass} key={key}>
                {renderOptionGroup(key)}
                {options.map((option: any, index: number) => {
                  return renderItemOption(option, index);
                })}
              </div>
            );
          }
          return renderItemOption(options, key);
        })}
      </div>
    );
  }
);

export default SelectOptions;
