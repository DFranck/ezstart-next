// src/components/CodeBlock.tsx
import { cn } from "@/lib/utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({
  code,
  language,
  className,
}: {
  code: string;
  language: string;
  className?: string;
}) => {
  return (
    <div className={cn("w-full overflow-auto max-h-80", className)}>
      <SyntaxHighlighter language={language} style={solarizedlight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
