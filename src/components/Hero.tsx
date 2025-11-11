import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-card shadow-xl border-4 border-primary/30 overflow-hidden hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-primary-foreground">
                MAZ
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            Mohamed Amine ZINABI
          </h1>
          
          <div className="text-xl md:text-2xl mb-6 text-foreground/90 font-medium">
            <span className="inline-block border-r-4 border-primary pr-2 animate-typing whitespace-nowrap overflow-hidden">
              Future Data Scientist & AI Engineer
            </span>
          </div>
          
          <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-2xl mx-auto">
            Master's Student in Data Analytics and Artificial Intelligence | Passionate about Machine Learning, Deep Learning & NLP
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="px-4 py-2 bg-card rounded-lg shadow-md">
              <span className="text-2xl font-bold text-primary">12</span>
              <span className="text-sm text-muted-foreground ml-2">Projects</span>
            </div>
            <div className="px-4 py-2 bg-card rounded-lg shadow-md">
              <span className="text-2xl font-bold text-secondary">8</span>
              <span className="text-sm text-muted-foreground ml-2">Certifications</span>
            </div>
            <div className="px-4 py-2 bg-card rounded-lg shadow-md">
              <span className="text-2xl font-bold text-accent">435</span>
              <span className="text-sm text-muted-foreground ml-2">LinkedIn Connections</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all">
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all">
              <Download className="mr-2 h-5 w-5" />
              View CV
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground shadow-lg hover:shadow-xl transition-all">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-accent hover:bg-accent hover:text-accent-foreground shadow-lg hover:shadow-xl transition-all">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
