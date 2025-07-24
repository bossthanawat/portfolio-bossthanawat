import { cn } from "@/lib/utils";
import { BookDashedIcon, LucideIcon } from "lucide-react";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  iconClassName?: string;
}

export const MessageEmptyState = ({
  title = 'No relevant information found.',
  description = 'Please try another question.',
  iconClassName,
  className,
  ...props
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3',
        className
      )}
      {...props}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
        <BookDashedIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
      </div>
      <div className="space-y-1 text-center">
        <h2 className="text-lg font-bold tracking-tight">{title}</h2>
        {description && (
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        )}
      </div>
    </div>
  );
};

export default MessageEmptyState;
