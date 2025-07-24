
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { Loader2, SparklesIcon, UserIcon, WrenchIcon } from "lucide-react";
import React, { type ReactNode } from "react";
import { MessageMarkdown } from "./messages/message-markdown";

const chatMessageVariants = cva("flex gap-4 w-full", {
	variants: {
		variant: {
			default: "",
			bubble: "",
			full: "p-5",
		},
		type: {
			incoming: "justify-start mr-auto",
			outgoing: "justify-end ml-auto",
		},
	},
	compoundVariants: [
		{
			variant: "full",
			type: "outgoing",
			className: "bg-muted",
		},
		{
			variant: "full",
			type: "incoming",
			className: "bg-background",
		},
	],
	defaultVariants: {
		variant: "default",
		type: "incoming",
	},
});

interface MessageContextValue extends VariantProps<typeof chatMessageVariants> {
	id: string;
}

const ChatMessageContext = React.createContext<MessageContextValue | null>(
	null,
);

const useChatMessage = () => {
	const context = React.useContext(ChatMessageContext);
	return context;
};

// Root component
interface ChatMessageProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof chatMessageVariants> {
	children?: React.ReactNode;
	id: string;
}

const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
	(
		{
			className,
			variant = "default",
			type = "incoming",
			id,
			children,
			...props
		},
		ref,
	) => {
		return (
			<ChatMessageContext.Provider value={{ variant, type, id }}>
				<div
					ref={ref}
					className={cn(chatMessageVariants({ variant, type, className }))}
					{...props}
				>
					{children}
				</div>
			</ChatMessageContext.Provider>
		);
	},
);
ChatMessage.displayName = "ChatMessage";

// Avatar component

const chatMessageAvatarVariants = cva(
	"w-8 h-8 flex items-center rounded-full justify-center ring-1 shrink-0 bg-transparent overflow-hidden",
	{
		variants: {
			type: {
				incoming: "ring-border",
				outgoing: "ring-muted-foreground/30",
			},
		},
		defaultVariants: {
			type: "incoming",
		},
	},
);

interface ChatMessageAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	imageSrc?: string;
	icon?: ReactNode;
}

const ChatMessageAvatar = React.forwardRef<
	HTMLDivElement,
	ChatMessageAvatarProps
>(({ className, icon: iconProps, imageSrc, ...props }, ref) => {
	const context = useChatMessage();
	const type = context?.type ?? "incoming";
	const icon =
		iconProps ?? (type === "incoming" ? <SparklesIcon /> : <UserIcon />);
	return (
		<div
			ref={ref}
			className={cn(chatMessageAvatarVariants({ type, className }))}
			{...props}
		>
			{imageSrc ? (
				<img
					src={imageSrc}
					alt="Avatar"
					className="h-full w-full object-cover"
				/>
			) : (
				<div className="translate-y-px [&_svg]:size-4 [&_svg]:shrink-0">
					{icon}
				</div>
			)}
		</div>
	);
});
ChatMessageAvatar.displayName = "ChatMessageAvatar";

// Content component

const chatMessageContentVariants = cva("flex flex-col gap-2", {
	variants: {
		variant: {
			default: "",
			bubble: "rounded-xl px-3 py-2",
			full: "",
		},
		type: {
			incoming: "",
			outgoing: "",
		},
	},
	compoundVariants: [
		{
			variant: "bubble",
			type: "incoming",
			className: "bg-secondary text-secondary-foreground",
		},
		{
			variant: "bubble",
			type: "outgoing",
			className: "bg-secondary",
		},
	],
	defaultVariants: {
		variant: "default",
		type: "incoming",
	},
});

interface ChatMessageContentProps extends React.HTMLAttributes<HTMLDivElement> {
	id?: string;
	content: string;
}

const ChatMessageContent = React.forwardRef<
	HTMLDivElement,
	ChatMessageContentProps
>(({ className, content, id: idProp, children, ...props }, ref) => {
	const context = useChatMessage();

	const variant = context?.variant ?? "default";
	const type = context?.type ?? "incoming";
	const id = idProp ?? context?.id ?? "";

	return (
		<div
			ref={ref}
			className={cn(chatMessageContentVariants({ variant, type, className }))}
			{...props}
		>
			{/* {content.length > 0 && <MarkdownContent id={id} content={content} />} */}
			{children}
			{content.length > 0 && <MessageMarkdown content={content} />} 
		
		</div>
	);
});
ChatMessageContent.displayName = "ChatMessageContent";

// Tool Call component
const chatMessageToolCallVariants = cva(
	"flex flex-col gap-2 p-3 rounded-lg border cursor-pointer",
	{
		variants: {
			type: {
				incoming: "bg-muted/50 border-border hover:bg-muted/70",
				outgoing: "bg-muted/30 border-muted-foreground/30 hover:bg-muted/40",
			},
		},
		defaultVariants: {
			type: "incoming",
		},
	},
);

interface ChatMessageToolCallProps extends React.HTMLAttributes<HTMLDivElement> {
	toolCall: {
		id: string;
		name: string;
		args: Record<string, any>;
	};
	result?: any;
	status?: 'pending' | 'success' | 'error';
}

const ChatMessageToolCall = React.forwardRef<
	HTMLDivElement,
	ChatMessageToolCallProps
>(({ className, toolCall, result, status = 'pending', ...props }, ref) => {
	const context = useChatMessage();
	const type = context?.type ?? "incoming";
	const [isExpanded, setIsExpanded] = React.useState(false);

	return (
		<div
			ref={ref}
			className={cn(chatMessageToolCallVariants({ type, className }))}
			onClick={() => setIsExpanded(!isExpanded)}
			{...props}
		>
			<div className="flex items-center justify-between text-sm font-medium">
				<div className="flex items-center gap-2">
					<WrenchIcon className="h-4 w-4" />
					<span>{toolCall.name}</span>
					{status === 'pending' && <Loader2 className="h-4 w-4 animate-spin" />}
				</div>
				<div className={cn("transition-transform", isExpanded ? "rotate-180" : "")}>
					<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</div>
			</div>
			
			{isExpanded && (
				<>
					{Object.keys(toolCall.args).length > 0 && (
						<div className="text-xs text-muted-foreground">
							<div className="font-medium mb-1">Arguments:</div>
							<pre className="whitespace-pre-wrap break-words bg-background p-2 rounded border">
								{JSON.stringify(toolCall.args, null, 2)}
							</pre>
						</div>
					)}
					{result && (
						<div className="text-xs">
							<div className="font-medium text-muted-foreground mb-1">Result:</div>
							<pre className="whitespace-pre-wrap break-words bg-background p-2 rounded border">
								{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}
							</pre>
							{/* <MessageMarkdown content={typeof result === 'string' ? result : JSON.stringify(result, null, 2)} /> */}
						</div>
					)}
				</>
			)}
		</div>
	);
});
ChatMessageToolCall.displayName = "ChatMessageToolCall";

export { ChatMessage, ChatMessageAvatar, ChatMessageContent, ChatMessageToolCall };
