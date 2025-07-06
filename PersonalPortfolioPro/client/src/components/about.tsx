import { Card, CardContent } from "@/components/ui/card";
import { timeline } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30 fade-in-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey from curiosity to expertise in AI agent development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Timeline Section */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-8">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                </div>
                <div className="ml-6">
                  <div className="text-sm text-primary font-semibold">{item.date}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* About Content */}
          <div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                I'm a self-taught developer who discovered my passion for AI agent development in April 2025. What started as curiosity about autonomous systems quickly evolved into a deep expertise in building intelligent, scalable solutions.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                My focus lies at the intersection of AI and practical business applications. I specialize in creating multi-agent systems using CrewAI and Langchain that can handle complex workflows, from customer support automation to content generation and data analysis.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Beyond AI, I'm a full-stack developer with expertise in modern web technologies. I build end-to-end SaaS applications that seamlessly integrate AI capabilities, helping businesses automate processes and scale efficiently.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="text-center p-4">
                    <div className="text-2xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">AI Agents Built</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center p-4">
                    <div className="text-2xl font-bold text-primary mb-2">8+</div>
                    <div className="text-sm text-muted-foreground">SaaS Projects</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
