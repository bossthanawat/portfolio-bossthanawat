import React, { FC, useMemo } from 'react';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeRaw from 'rehype-raw';
import { MessageMarkdownMemoized } from './message-markdown-memoized.js';
import { Components } from 'react-markdown';
interface MessageMarkdownProps {
  content: string;
}
interface CustomComponents extends Components {}

export const MessageMarkdown: FC<MessageMarkdownProps> = ({ content }) => {
  const replacedContent = content.replace(
    /<think>([\s\S]*?)<\/think>/g,
    (match, p1) => {
      // ลบ leading และ trailing whitespace ก่อน
      const trimmed = p1.trim();
      // แล้วค่อยแทนที่ newline ด้วย <br/>
      const replaced = trimmed.replace(/\n/g, '<br/>');
      return `<think>${replaced}</think>`;
    }
  );

  const components: CustomComponents = {
    p({ children }) {
      return <p className="mb-2 last:mb-0">{children}</p>;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    img({ node, ...props }) {
      return <img className="max-w-[67%]" {...props} />;
    },
    table({ children }) {
      return (
        <div className="my-4 w-full overflow-x-auto">
          <table className="border-border w-full border-collapse border">
            {children}
          </table>
        </div>
      );
    },
    th({ children }) {
      return (
        <th className="bg-muted border-border border px-4 py-2 text-left font-semibold">
          {children}
        </th>
      );
    },
    td({ children }) {
      return <td className="border-border border px-4 py-2">{children}</td>;
    },
    a({ ...props }) {
      return <a className="text-primary" {...props} />;
    },
  };
  return (
    <>
      <MessageMarkdownMemoized
        className="prose dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 prose-pre:text-inherit prose-pre:bg-inherit prose-pre:m-0 min-w-full space-y-6 break-words"
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {replacedContent}
      </MessageMarkdownMemoized>
    </>
  );
};
