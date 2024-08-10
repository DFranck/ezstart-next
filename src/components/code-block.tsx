import { cn } from '@/lib/utils';

const CodeBlock = ({
  code,
  className,
  src,
}: {
  code: string;
  className?: string;
  src?: string;
}) => {
  return (
    <>
      <pre className="mt-8 w-full">
        <code className="text-sm">{src}</code>
      </pre>
      <pre
        className={cn(
          'bg-card text-card-foreground rounded-xl shadow border p-4 w-full overflow-auto my-2',
          className,
        )}
        style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
      >
        <code className="">{code}</code>
      </pre>
    </>
  );
};

export default CodeBlock;
