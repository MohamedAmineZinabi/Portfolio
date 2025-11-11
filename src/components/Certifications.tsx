import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  date: string;
  logo: string;
  skills: string[];
  link?: string;
}

const certifications: Certification[] = [
  {
    title: "GREEN DIGITAL CERTIFICATE PROGRAM",
    organization: "INCO Academy",
    date: "November 2025",
    logo: "🌱",
    skills: ["Sustainability", "Digital Innovation"],
  },
  {
    title: "Les essentiels de Microsoft Azure AI",
    organization: "Microsoft & LinkedIn",
    date: "October 2025",
    logo: "☁️",
    skills: ["Azure AI", "Cloud Computing"],
  },
  {
    title: "Docker Foundations Professional Certificate",
    organization: "Docker, Inc.",
    date: "2024",
    logo: "🐳",
    skills: ["Docker", "Containerization", "DevOps"],
  },
  {
    title: "Introduction to Deep Learning and Neural Networks with Keras",
    organization: "IBM",
    date: "2024",
    logo: "🧠",
    skills: ["Deep Learning", "Keras", "Neural Networks"],
  },
  {
    title: "Machine Learning with Python",
    organization: "IBM",
    date: "2024",
    logo: "🤖",
    skills: ["Machine Learning", "Python", "Scikit-learn"],
  },
  {
    title: "Microsoft Azure AI Fundamentals",
    organization: "Microsoft",
    date: "2024",
    logo: "☁️",
    skills: ["Azure", "AI Services", "Cognitive Services"],
  },
  {
    title: "MLOps Essentials for Developers and AI Engineers",
    organization: "LinkedIn",
    date: "2024",
    logo: "⚙️",
    skills: ["MLOps", "CI/CD", "ML Pipelines"],
  },
  {
    title: "Image Processing Onramp",
    organization: "MathWorks",
    date: "2024",
    logo: "📊",
    skills: ["Image Processing", "MATLAB"],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Certifications</h2>
        <div className="w-20 h-1 bg-gradient-hero mx-auto mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{cert.logo}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2 mb-2">{cert.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-muted-foreground">
                      {cert.organization}
                    </CardDescription>
                    <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {cert.link && (
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
