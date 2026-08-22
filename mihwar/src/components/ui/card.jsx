export function Card({ className = '', ...props }) {
  return <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`} {...props} />;
}
