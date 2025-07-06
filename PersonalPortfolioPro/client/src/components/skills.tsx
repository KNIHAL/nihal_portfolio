import { Brain, Server, Palette, Cloud, Wrench, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

const iconMap = {
  brain: Brain,
  server: Server,
  "paint-brush": Palette,
  cloud: Cloud,
  tools: Wrench,
  database: Database
};

const colorMap = {
  blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
  green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
  purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
  orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
  red: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
  yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400"
};

const badgeColorMap = {
  blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  purple: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  orange: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  red: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
  yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 fade-in-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise across AI development, full-stack engineering, and cloud infrastructure
          </p>
        </div>
        
        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, data]) => {
            const IconComponent = iconMap[data.icon as keyof typeof iconMap];
            const iconColorClass = colorMap[data.color as keyof typeof colorMap];
            const badgeColorClass = badgeColorMap[data.color as keyof typeof badgeColorMap];
            
            return (
              <Card key={category} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${iconColorClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="text-2xl" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className={badgeColorClass}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
