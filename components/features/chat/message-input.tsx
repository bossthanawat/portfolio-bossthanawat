import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AutosizeTextarea } from '@/components/ui/autosize-textarea';

type ToolbarSearchProps = {
  onSearch: (search: string) => void;
  isLoading: boolean;
  placeholder?: string;
  children?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
};

const MessageInput = ({
  onSearch,
  isLoading,
  placeholder,
  children,
  value: controlledValue,
  onChange: controlledOnChange,
}: ToolbarSearchProps) => {
  const [internalSearch, setInternalSearch] = useState('');
  
  const search = controlledValue !== undefined ? controlledValue : internalSearch;
  const setSearch = controlledOnChange || setInternalSearch;

  const handleSearch = () => {
    if (search.trim()) {
      onSearch(search);
      if (controlledValue === undefined) {
        setSearch('');
      }
    }
  };

  return (
    <div className="flex-1">
      <div className="border-input bg-background relative w-full rounded-xl border">
        <div className="flex gap-2">
          <AutosizeTextarea
            className="resize-none rounded-xl border-none shadow-none focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder || 'Type something...'}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && search) {
                e.preventDefault();
                handleSearch();
                e.currentTarget.blur();
              }
            }}
          />
          <div className="pt-2 pr-3">
            <button
              className={cn(
                'rounded-xl p-1',
                isLoading ? 'bg-none' : 'bg-black/5 dark:bg-white/5'
              )}
              onClick={handleSearch}
              disabled={!search.trim()}
            >
              {isLoading ? (
                <div
                  className="h-4 w-4 animate-spin rounded-sm bg-black transition duration-700 dark:bg-white"
                  style={{ animationDuration: '3s' }}
                />
              ) : (
                <ArrowUpIcon
                  className={cn(
                    'h-4 w-4 transition-opacity dark:text-white',
                    search ? 'opacity-100' : 'opacity-30'
                  )}
                />
              )}
            </button>
          </div>
        </div>
        {children && <div className="px-3 pb-2">{children}</div>}
      </div>
    </div>
  );
};

export default MessageInput;
