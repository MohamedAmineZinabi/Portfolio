import { Code2, Database, Brain, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto mb-12 rounded-full" />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Data Scientist and AI Engineer currently pursuing my Master's degree in Data Analytics and Artificial Intelligence at Université Ibn Zohr. With a strong foundation in machine learning, deep learning, and natural language processing, I thrive on turning complex data into actionable insights.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey in tech is driven by curiosity and a commitment to excellence. I've completed 8 professional certifications from industry leaders like Microsoft, IBM, and Docker, and I've built 12+ projects showcasing my expertise in Python, SQL, and modern AI frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border">
                <Code2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Programming</h3>
                <p className="text-muted-foreground">Expert in Python, SQL, Java, C#, and TypeScript with a focus on clean, efficient code.</p>
              </div>

              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border">
                <Database className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Data Science</h3>
                <p className="text-muted-foreground">Proficient in Pandas, NumPy, Scikit-learn, and data visualization tools like Power BI.</p>
              </div>

              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border">
                <Brain className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">AI & ML</h3>
                <p className="text-muted-foreground">Deep expertise in TensorFlow, Keras, NLP, and RAG-based systems.</p>
              </div>

              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Innovation</h3>
                <p className="text-muted-foreground">Building cutting-edge solutions with React, FastAPI, and modern cloud technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
