import { Card } from "@/components/ui";
import { cn } from "@/utils";
import { useNavigate } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function AppBar({ className }: Props) {
  const navigate = useNavigate();
  return (
    <Card className={cn("px-6 py-4", className)}>
      <button onClick={() => navigate("/home")}>Home</button>
      <div className="flex flex-col gap-2 md:flex-row md:gap-8">
        <button>Login</button>
        <button className="rounded-lg border-2 border-white px-3 py-1">
          Create Account
        </button>
      </div>
    </Card>
  );
}
