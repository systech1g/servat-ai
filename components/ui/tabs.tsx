import React from "react";
import { ReactNode, useState } from "react";

export function Tabs({ children, defaultValue, className = "" }: { children: ReactNode; defaultValue: string; className?: string }) {
  const [active, setActive] = useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, child =>
        typeof child === "object" && child && "props" in child && child.props.__TYPE === "TabsList"
          ? React.cloneElement(child as any, { active, setActive })
          : typeof child === "object" && child && "props" in child && child.props.value === active
          ? child
          : null
      )}
    </div>
  );
}

export function TabsList({ children, active, setActive, className = "" }: any) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          isActive: child.props.value === active,
          onClick: () => setActive(child.props.value),
        })
      )}
    </div>
  );
}
TabsList.defaultProps = { __TYPE: "TabsList" };

export function TabsTrigger({ children, value, isActive, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border rounded ${isActive ? "bg-blue-600 text-white" : "bg-white text-black"}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value }: { children: ReactNode; value: string }) {
  return <div>{children}</div>;
}