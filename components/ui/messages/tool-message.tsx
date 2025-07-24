import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ToolMessageProps {
  toolName: string;
  toolArgs: string;
  toolResult: string;
}

export function ToolMessage({ toolName, toolArgs, toolResult }: ToolMessageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-3">
      <div 
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium text-gray-700">
            🔧 Using tool: {toolName}
          </div>
        </div>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {isExpanded && (
        <>
          <div className="rounded bg-gray-50 p-2">
            <div className="text-xs font-medium text-gray-500">Arguments:</div>
            <pre className="mt-1 text-sm overflow-x-auto">{toolArgs}</pre>
          </div>
          
          <div className="rounded bg-gray-50 p-2">
            <div className="text-xs font-medium text-gray-500">Result:</div>
            <pre className="mt-1 text-sm overflow-x-auto">{toolResult}</pre>
          </div>
        </>
      )}
    </div>
  );
} 