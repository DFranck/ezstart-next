import { cn } from "@/lib/utils";

const CodeBlock = ({
  code,
  className,
}: {
  code: string;
  className?: string;
}) => {
  return (
    <pre
      className={cn(
        "bg-background rounded p-4 w-full overflow-auto my-2",
        className
      )}
    >
      <code className=" break-words whitespace-pre-wrap ">{code}</code>
    </pre>
  );
};

export default CodeBlock;
