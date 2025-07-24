import React from 'react';

interface ThinkProps {
  children: React.ReactNode;
}

export const ThinkBox: React.FC<ThinkProps> = ({ children}) => {
  return (
    <div className="w-full not-prose mb-4 border rounded-lg p-4">
      <div className='text-sm font-medium'>Reasoning</div>
      <div className='text-sm'>{children}</div>
    </div>
  );
};
