import { FC, memo } from "react"
import ReactMarkdown, { Options } from "react-markdown"

// eslint-disable-next-line react/display-name
export const MessageMarkdownMemoized: FC<Options & { className?: string }> = memo(
  ({ className, ...markdownProps }) => (
    <div className={className}>
      <ReactMarkdown {...markdownProps} />
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
)
