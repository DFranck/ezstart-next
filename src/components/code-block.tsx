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
    <div
      className={cn(
        "w-full max-w-full overflow-auto break-words whitespace-pre-wrap",
        className
      )}
    >
      <SyntaxHighlighter
        language={language}
        style={solarizedlight}
        wrapLongLines={true}
        customStyle={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
