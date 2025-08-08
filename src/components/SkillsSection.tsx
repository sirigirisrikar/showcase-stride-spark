import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SASS", "HTML5", "CSS3"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Python", "Java", "Express.js", "Django", "Spring Boot", "REST APIs", "GraphQL"]
    },
    {
      title: "Database & Cloud",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "AWS", "Docker", "Kubernetes", "Firebase"]
    },
    {
      title: "Data Science & AI",
      skills: ["Python", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "Jupyter", "R"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Linux", "Figma", "Postman", "Jest", "Cypress"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through academic projects, internships, and personal exploration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-elegant bg-card/50 backdrop-blur border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg gradient-text">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Skills with Progress */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Full-Stack Development", level: 90 },
              { skill: "Data Structures & Algorithms", level: 95 },
              { skill: "Machine Learning", level: 85 },
              { skill: "Cloud Technologies", level: 80 }
            ].map((item, index) => (
              <div key={index} className="space-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
