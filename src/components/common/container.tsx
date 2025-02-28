import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function Container({
  children,
  className,
  size,
}: ContainerProps) {
  return (
    <div
      className={cn("w-full max-w-[1328px] px-6 mx-auto", className, {
        "max-w-3xl": size === "sm",
        "max-w-[1088px]": size === "md",
        "max-w-[1328px]": size === "lg",
      })}>
      {children}
    </div>
  );
}
