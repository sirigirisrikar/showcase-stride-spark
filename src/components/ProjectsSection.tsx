import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: true,
      stars: 124
    },
    {
      title: "ML Price Predictor",
      description: "Machine learning model for real estate price prediction using Python, scikit-learn, and data visualization libraries.",
      image: project2,
      technologies: ["Python", "TensorFlow", "Pandas", "Flask", "React"],
      github: "#",
      live: "#",
      featured: true,
      stars: 89
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work, demonstrating technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-elegant bg-card/50 backdrop-blur border-primary/20 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-primary">
                    Featured
                  </Badge>
                )}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur rounded-full px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-white">{project.stars}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl gradient-text">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 border-primary/50 hover:border-primary">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="gradient" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
