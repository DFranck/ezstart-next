// src/components/TextLoader.tsx

const TextLoader = () => {
  return (
    <div className="flex items-center space-x-2">
      <span>Loading</span>
      <div className="flex space-x-1  duration-500">
        <div className="dot bg-primary-foreground w-1.5 h-1.5 rounded-full animate-bounce"></div>
        <div className="dot bg-primary-foreground w-1.5 h-1.5 rounded-full animate-bounce delay-100"></div>
        <div className="dot bg-primary-foreground w-1.5 h-1.5 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
};

export default TextLoader;
