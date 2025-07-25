import { Badge } from '@/components/ui/badge';

const Technologies = () => {
  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'TailwindCSS',
    'Node.js',
    'Bun',
    'Tanstack (Query, Router, etc.)',
    'Supabase',
    'GraphQL',
    'AWS',
    'GCP',
    'PostgreSQL',
    'AI SDK',
    'LangChainJS',
    'MCP',
    'Git',
    'Docker',
    'Jest',
    'Figma',
    'MUI',
    'Ant Design',
    'Shadcn/ui',
    'Redux',
    'NestJS',
    'DynamoDB',
    'Vercel',
  ];

  return (
    <div className="">
      <h3 className="text-xl font-bold md:text-2xl">Technologies I use</h3>
      <p className="mt-2 text-sm text-gray-600 md:text-base">
        Over the years, I have worked with a variety of technologies. Here are
        some of the technologies I have experience with:
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="text-sm hover:bg-gray-200"
          >
            {tech}
          </Badge>
        ))}
        <Badge variant="outline" className="text-sm text-gray-500">
          ... and many more!
        </Badge>
      </div>
    </div>
  );
};

export default Technologies;
