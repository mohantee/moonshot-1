import { cn } from "@/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "bg-card shadow-glass rounded-lg font-semibold text-white backdrop-blur-xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
