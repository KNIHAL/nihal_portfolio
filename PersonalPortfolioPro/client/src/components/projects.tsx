import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

type FilterType = "all" | "ai-agents" | "web-apps" | "automation";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  const filters = [
    { label: "All Projects", value: "all" as FilterType },
    { label: "AI Agents", value: "ai-agents" as FilterType },
    { label: "Web Apps", value: "web-apps" as FilterType },
    { label: "Automation", value: "automation" as FilterType }
  ];

  const getColorForTech = (tech: string) => {
    const techColors: Record<string, string> = {
      "CrewAI": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Langchain": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Python": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "React": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "PostgreSQL": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "AWS": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "FastAPI": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Redis": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Celery": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "OpenAI": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Streamlit": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Socket.io": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Express": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "MongoDB": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Docker": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "GCP": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
    };
    return techColors[tech] || "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
  };

  return (
    <section id="projects" className="py-20 bg-muted/30 fade-in-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work in AI agent development, SaaS applications, and automation systems
          </p>
        </div>
        
        {/* Project Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card rounded-lg p-1 shadow-lg">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "ghost"}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeFilter === filter.value 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className={getColorForTech(tech)}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
