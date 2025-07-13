import React, { useState, Children, cloneElement, isValidElement } from "react";

export function Tabs({ defaultValue, children, className }: any) {
  const [active, setActive] = useState(defaultValue);
  return (
    <div className={className}>
      {Children.map(children, (child) => {
        if (
          isValidElement(child) &&
          child.props.__TYPE === "TabsList"
        ) {
          return cloneElement(child, { active, setActive });
        }

        if (
          isValidElement(child) &&
          child.props.value === active
        ) {
          return child;
        }

        return null;
      })}
    </div>
  );
}

export function TabsList({ children, active, setActive }: any) {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {Children.map(children, (child) => {
        if (
          isValidElement(child) &&
          child.props.__TYPE === "TabsTrigger"
        ) {
          return cloneElement(child, { active, setActive });
        }
        return null;
      })}
    </div>
  );
}

export function TabsTrigger({ value, children, active, setActive }: any) {
  const isActive = value === active;
  return (
    <button
      onClick={() => setActive(value)}
      className={`px-4 py-2 rounded-full border transition ${
        isActive ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {children}
    </button>
  );
}
TabsTrigger.defaultPro
