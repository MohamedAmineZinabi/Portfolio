import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "SQL", "Java", "C#", "TypeScript", "JavaScript"],
      color: "bg-primary/10 border-primary",
    },
    {
      title: "Python Libraries",
      icon: "🐍",
      skills: ["Scikit-learn", "SpaCy", "NLTK", "TensorFlow", "Keras", "NumPy", "Pandas", "SciPy", "Statsmodels"],
      color: "bg-secondary/10 border-secondary",
    },
    {
      title: "Data Science & AI",
      icon: "🤖",
      skills: ["Machine Learning", "Deep Learning", "Clustering", "Supervised Learning", "NLP", "RAG"],
      color: "bg-accent/10 border-accent",
    },
    {
      title: "Frontend Frameworks",
      icon: "🎨",
      skills: ["React", "Vue.js", "Tailwind CSS", "HTML/CSS"],
      color: "bg-primary/10 border-primary",
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      skills: ["Spring Boot", "FastAPI", "RESTful APIs"],
      color: "bg-secondary/10 border-secondary",
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "SQL Server", "Hadoop HDFS"],
      color: "bg-accent/10 border-accent",
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Docker", "MLflow", "VS Code", "PyCharm"],
      color: "bg-primary/10 border-primary",
    },
    {
      title: "Data Visualization",
      icon: "📊",
      skills: ["Power BI", "Matplotlib", "Seaborn"],
      color: "bg-secondary/10 border-secondary",
    },
  ];

  const softSkills = [
    "Communication",
    "Team Spirit",
    "Autonomy",
    "Punctuality",
    "Time Management",
    "Problem Solving",
    "Adaptability",
    "Critical Thinking",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-gradient-hero mx-auto mb-12 rounded-full" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className={`border-2 ${category.color} hover:shadow-xl transition-shadow`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-3xl">✨</span>
                <span className="text-lg">Soft Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <Badge key={skill} className="text-sm bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
