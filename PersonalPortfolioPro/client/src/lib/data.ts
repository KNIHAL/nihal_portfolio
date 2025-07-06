export const projects = [
  {
    id: "ai-customer-support",
    title: "AI Customer Support Agent",
    description: "Intelligent customer support system using CrewAI and Langchain for automated ticket resolution and sentiment analysis.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "ai-agents",
    technologies: ["CrewAI", "Langchain", "Python"],
    githubUrl: "https://github.com/kumarnihal/ai-support-agent",
    liveUrl: "https://ai-support-demo.vercel.app"
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Platform",
    description: "Full-stack analytics platform with real-time data visualization, user management, and subscription billing integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "web-apps",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com/kumarnihal/saas-analytics",
    liveUrl: "https://analytics-platform-demo.vercel.app"
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation System",
    description: "Drag-and-drop workflow builder with AI-powered task automation, integrations with popular APIs, and real-time monitoring.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "automation",
    technologies: ["Python", "FastAPI", "Redis", "Celery"],
    githubUrl: "https://github.com/kumarnihal/workflow-automation",
    liveUrl: "https://workflow-automation-demo.vercel.app"
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description: "Multi-agent content creation system that generates blog posts, social media content, and marketing copy using advanced prompt engineering.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "ai-agents",
    technologies: ["OpenAI", "Langchain", "Streamlit"],
    githubUrl: "https://github.com/kumarnihal/ai-content-generator",
    liveUrl: "https://ai-content-generator.streamlit.app"
  },
  {
    id: "realtime-chat",
    title: "Real-time Chat Application",
    description: "Scalable chat application with real-time messaging, file sharing, and AI-powered message moderation and smart replies.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "web-apps",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    githubUrl: "https://github.com/kumarnihal/realtime-chat",
    liveUrl: "https://realtime-chat-demo.herokuapp.com"
  },
  {
    id: "api-integration-hub",
    title: "API Integration Hub",
    description: "Comprehensive API management platform with authentication, rate limiting, and automated testing for seamless third-party integrations.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    category: "automation",
    technologies: ["FastAPI", "Docker", "PostgreSQL", "GCP"],
    githubUrl: "https://github.com/kumarnihal/api-integration-hub",
    liveUrl: "https://api-hub-demo.gcp.app"
  }
];

export const skills = {
  "AI & Machine Learning": {
    icon: "brain",
    color: "blue",
    skills: ["CrewAI", "Langchain", "OpenAI API", "Prompt Engineering", "Hugging Face"]
  },
  "Programming Languages": {
    icon: "server",
    color: "green",
    skills: ["Python", "FastAPI", "Node.js", "Express.js", "Django"]
  },
  "Web Development": {
    icon: "paint-brush",
    color: "purple",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Streamlit"]
  },
  "Cloud & DevOps": {
    icon: "cloud",
    color: "orange",
    skills: ["Google Cloud", "AWS", "Docker", "Kubernetes", "Vercel", "GitHub Actions"]
  },
  "Tools & Platforms": {
    icon: "tools",
    color: "red",
    skills: ["Replit AI", "Composio", "Git", "VS Code", "Postman", "Figma"]
  },
  "Data Storage": {
    icon: "database",
    color: "yellow",
    skills: ["Supabase", "Firebase"]
  }
};

export const timeline = [
  {
    date: "April 2025",
    title: "Started AI Agent Journey",
    description: "Began exploring AI agent development after discovering the potential of autonomous systems in solving complex business problems."
  },
  {
    date: "May 2025",
    title: "Deep Dive into CrewAI",
    description: "Mastered CrewAI framework and built my first multi-agent system for automated content creation and research workflows."
  },
  {
    date: "Present",
    title: "Full Stack SaaS Builder",
    description: "Combining AI expertise with full-stack development to create scalable SaaS solutions that leverage intelligent automation."
  }
];
