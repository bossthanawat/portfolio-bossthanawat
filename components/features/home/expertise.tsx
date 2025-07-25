import dayjs from 'dayjs';
import { Code2, Brain, Palette, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Expertise = () => {
  const yearsOfExperience = dayjs().diff('2017-05-01', 'years');

  const expertiseData = [
    {
      icon: Code2,
      title: 'Software Engineer',
      description: 'Web application development, problem-solving with comprehensive experience in modern development practices.',
      technologies: ['JavaScript', 'TypeScript', 'AWS', 'GCP', 'CI/CD'],
      highlight: `${yearsOfExperience}+ years experience`,
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Specialized in integrating cutting-edge AI capabilities into web applications and systems.',
      technologies: ['LLM Applications', 'RAG Systems', 'Text-to-SQL', 'AI Agents'],
      highlight: 'AI-Powered Solutions',
    },
    {
      icon: Palette,
      title: 'Front-End Developer',
      description: 'Passionate about creating beautiful, intuitive user interfaces with keen attention to design principles.',
      technologies: ['React', 'NextJS', 'Vue', 'HTML/CSS'],
      highlight: 'UI/UX Focused',
    },
  ];

  return (
    <div className="w-full">
      <div className="mb-8 text-start">
        {/* <h3 className="text-2xl font-bold md:text-3xl">
          About me
        </h3> */}
      </div>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {expertiseData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="group relative bg-background border-2 border-border rounded-xl p-6 [box-shadow:5px_5px_0px_rgb(200_200_200)] hover:[box-shadow:8px_8px_0px_rgb(160_160_160)] transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1 mt-1">
                      <Sparkles className="h-3 w-3 text-yellow-500" />
                      <span className="text-xs font-medium text-muted-foreground">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expertise;
