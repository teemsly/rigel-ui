import classNames from "classnames";

let classPrefix = "ts";
if (process.env.RIGEL_CLASS_PREFIX) {
  classPrefix = process.env.RIGEL_CLASS_PREFIX;
}

/**
 * Add prefix for class name.
 *
 * @param prefix prefix of the classes
 * @param classname the class name
 * @returns string
 */
const addPrefix = (prefix: string, classname: any): string => {
  if (!prefix || !classname) {
    return "";
  }

  if (typeof classname === "object") {
    return classNames(
      classname
        .filter((name: any) => !!name)
        .map((name: any) => `${prefix}-${name}`)
    );
  }

  return `${prefix}-${classname}`;
};

export default addPrefix;
