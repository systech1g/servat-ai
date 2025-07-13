import React, { useState, Children, cloneElement, isValidElement } from "react";
import classNames from "classnames";

export function Tabs({ defaultValue, children, className }: any) {
  const [active, setActive] = useState(defaultValue);

  return (
    <div className={className}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;

        if (child.props.__TYPE === "TabsList") {
          return cloneElement(child, { active, setActive });
        }

        if (child.props.value === active) {
          return child;
        }

        return null;
      })}
    </div>
  );
}

export function TabsList({ children, active, setActive }: any) {
  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;
        return cloneElement(child, { active, setActive });
      })}
    </div>
  );
}

TabsList.displayName = "TabsList";
TabsList.defaultProps = {
  __TYPE: "TabsList",
};

export function TabsTrigger({ value, children, active, setActive }: any) {
  return (
    <button
      className={classNames(
        "px-4 py-2 rounded-full border",
        active === value
          ? "bg-black text-white border-black"
          : "bg-white text-black border-gray-300 hover:border-black"
      )}
      onClick={() => setActive(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: any) {
  return <div>{children}</div>;
}
