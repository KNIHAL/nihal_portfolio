import { Download, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start animate-slide-in-left">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
              alt="Kumar Nihal - AI Agent Developer" 
              className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-primary"
            />
          </div>
          
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-slide-in-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Kumar</span> Nihal
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              AI Agent Developer | Full Stack SaaS Builder
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              Specializing in CrewAI, Langchain, and cloud-native solutions. Building intelligent automation systems and scalable SaaS applications with cutting-edge AI technology.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <a href="/resume.pdf" download="Kumar_Nihal_Resume.pdf">
                  <Download className="mr-3 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToProjects}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="mr-3 h-4 w-4" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
