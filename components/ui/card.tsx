export function Card({ children }: any) {
  return <div className="bg-white rounded-xl shadow">{children}</div>;
}
export function CardContent({ children, className = "" }: any) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
