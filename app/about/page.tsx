import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Building,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const workExperience = [
    {
      company: 'Float16.Cloud',
      position: 'Software Engineer',
      duration: 'Jul 2024 – Present',
      type: 'AI Startup',
      description:
        'Development for serverless GPU platform using React & TypeScript. Contributed to CLI SDK development and provided AI integration consulting for enterprise clients including LLM applications and RAG systems.',
    },
    {
      company: 'Easy Rice Digital Technology',
      position: 'Front-End Developer (Senior-Level)',
      duration: 'Feb 2021 - Jul 2024',
      type: 'AI Startup',
      description:
        'Developed AI-powered rice inspection web applications, CRM systems, and trading platforms. Built monorepo architecture with Nx, implemented dynamic UI components, and created responsive mobile-optimized experiences using React & TypeScript.',
    },
    {
      company: 'NTT Global',
      position: 'Software Engineer',
      duration: 'Nov 2019 - Jan 2021',
      type: 'Technology Services',
      description:
        'Developed web applications for production process management systems for enterprise clients like Tesco. Implemented interface design and enhanced client services using Robotic Process Automation (RPA) technology.',
    },
    {
      company: 'Dimension Data',
      position: 'Software Engineer',
      duration: 'Jun 2017 - Oct 2019',
      type: 'Technology Services',
      description:
        'Built PDF generation systems for banking fax solutions and implemented complex Interactive Voice Response (IVR) systems with advanced flow logic for clients like Agoda. Maintained diverse client-specific enterprise systems.',
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8 text-center sm:mb-12">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">About Me</h1>
        <p className="text-muted-foreground px-2 text-base sm:text-lg">
          Software Engineer passionate about AI integration and creating
          beautiful web experiences
        </p>
      </div>

      {/* Work Experience Timeline */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3 sm:mb-6">
          <Briefcase className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
          <h2 className="text-2xl font-bold sm:text-3xl">Work Experience</h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="bg-background border-border hover:border-primary group relative rounded-xl border-2 p-4 [box-shadow:5px_5px_0px_rgb(200_200_200)] transition-all duration-300 hover:-translate-y-1 hover:[box-shadow:8px_8px_0px_rgb(160_160_160)] sm:p-6"
            >
              <div className="from-primary/5 to-secondary/5 absolute inset-0 rounded-xl bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Desktop Layout */}
                <div className="mb-3 hidden items-start justify-between sm:flex">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-2 transition-colors duration-300">
                      <Building className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-foreground text-lg font-bold">
                        {job.company}
                      </h3>
                      <p className="text-primary text-sm font-semibold">
                        {job.position}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {job.type}
                    </Badge>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <Calendar className="h-3 w-3" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="mb-4 sm:hidden">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-2 transition-colors duration-300">
                      <Building className="text-primary h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground text-lg leading-tight font-bold">
                        {job.company}
                      </h3>
                      <p className="text-primary text-sm font-semibold">
                        {job.position}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {job.type}
                    </Badge>
                    <div className="text-muted-foreground flex items-center gap-1 text-sm">
                      <Calendar className="h-3 w-3" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed sm:text-sm">
                  {job.description}
                </p>
              </div>

              {/* Timeline line (except for last item) */}
              {index < workExperience.length - 1 && (
                <div className="bg-border absolute bottom-0 left-6 h-4 w-0.5 translate-y-full transform sm:left-8 sm:h-6" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="sm:mb-12">
        <div className="mb-4 flex items-center gap-3 sm:mb-6">
          <GraduationCap className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
          <h2 className="text-2xl font-bold sm:text-3xl">Education</h2>
        </div>

        <div className="bg-background border-border hover:border-primary group relative rounded-xl border-2 p-4 [box-shadow:5px_5px_0px_rgb(200_200_200)] transition-all duration-300 hover:-translate-y-1 hover:[box-shadow:8px_8px_0px_rgb(160_160_160)] sm:p-6">
          <div className="from-primary/5 to-secondary/5 absolute inset-0 rounded-xl bg-gradient-to-br via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative z-10">
            {/* Desktop Layout */}
            <div className="mb-4 hidden items-start justify-between sm:flex">
              <div>
                <h3 className="text-foreground mb-2 text-xl font-bold">
                  King Mongkut's Institute of Technology Ladkrabang
                </h3>
                <p className="text-primary mb-2 font-semibold">
                  Bachelor's Degree in Engineering (Major Computer Information)
                </p>
                <div className="text-muted-foreground flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>2013 – 2016</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Bangkok, Thailand</span>
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs">
                GPA: 3.08
              </Badge>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden">
              <div className="mb-3">
                <h3 className="text-foreground mb-2 text-xl leading-tight font-bold">
                  King Mongkut's Institute of Technology Ladkrabang
                </h3>
                <p className="text-primary mb-3 font-semibold">
                  Bachelor's Degree in Engineering (Major Computer Information)
                </p>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div className="text-muted-foreground flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>2013 – 2016</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  GPA: 3.08
                </Badge>
              </div>
              <div className="text-muted-foreground flex items-center gap-1 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Bangkok, Thailand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
