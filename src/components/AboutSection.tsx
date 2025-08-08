import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Brain, Trophy } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Final Year ECE Student at Guru Nanak Institutions Technical Campus with a 9.0 GPA"
    },
    {
      icon: Code,
      title: "Development",
      description: "1 years of experience in full-stack development"
    },
    {
      icon: Brain,
      title: "Specialization",
      description: "Data Science, and Cloud Technologies"
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Hackathon winner, Open source contributor"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate computer science student with a strong foundation in software development 
            and emerging technologies. My journey in tech began with curiosity and has evolved into 
            a deep commitment to creating impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-elegant bg-card/50 backdrop-blur border-primary/20 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-primary rounded-full">
                    <highlight.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-elegant bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Throughout my academic journey, I've maintained a perfect balance between 
                    theoretical knowledge and practical application. My passion for technology 
                    drives me to constantly learn and adapt to new challenges.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me contributing to open source projects, 
                    participating in hackathons, or exploring the latest trends in AI and machine learning.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Problem Solving</span>
                    <span className="text-primary">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-[95%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Team Collaboration</span>
                    <span className="text-primary">90%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-[90%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium">Leadership</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
