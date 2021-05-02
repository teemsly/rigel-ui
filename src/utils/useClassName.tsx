import { useCallback } from "react";
import classnames from "classnames";
import addPrefix from "./addClassPrefix";

type ClassType =
  | string
  | boolean
  | AnyClassType
  | ArrayClassType
  | undefined
  | null;

interface ArrayClassType extends Array<AnyClassType> {}

interface AnyClassType {
  [key: string]: any;
}

const useClassName = (classname: ClassType) => {
  const prefix = "ts";
  const componentPrefix = addPrefix(prefix, classname);

  const setPrefix = useCallback(
    (...classes: any[]) => {
      const prefixingClasses = classes?.length
        ? classnames(...classes)
            ?.split(" ")
            ?.map((item: string, _: number) => {
              return addPrefix(componentPrefix, item);
            })
        : [];

      return prefixingClasses?.map((cls) => cls).join(" ");
    },
    [componentPrefix]
  );

  const addClassNames = useCallback(
    (...classes: any[]) => {
      const mergeClasses = setPrefix(classes);
      return mergeClasses
        ? `${componentPrefix} ${mergeClasses}`
        : componentPrefix;
    },
    [componentPrefix, setPrefix]
  );

  return {
    addClassNames,
    mergeClassName: classnames,
    setPrefix,
  };
};

export default useClassName;
