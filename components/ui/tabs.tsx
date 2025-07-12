export function Tabs({ children, defaultValue, className = "" }: any) {
  return <div className={className}>{children}</div>;
}
export function TabsList({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}
export function TabsTrigger({ children, value }: any) {
  return <button className="px-4 py-2 text-blue-600 font-semibold">{children}</button>;
}
export function TabsContent({ children, value }: any) {
  return <div>{children}</div>;
}
