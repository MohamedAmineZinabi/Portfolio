import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch("https://api.github.com/users/MohamedAmineZinabi/repos?sort=updated&per_page=12");
  if (!response.ok) throw new Error("Failed to fetch repositories");
  return response.json();
};

const Projects = () => {
  const { data: repos, isLoading, error } = useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchGitHubRepos,
  });

  const featuredProjects = [
    "Projet_Chatbot_Restaurant",
    "Detection-de-fraudes-par-carte-bancaire",
    "Prediction-des-Ventes-pour-un-Retailer",
    "NER_PROJECT",
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Projects</h2>
        <div className="w-20 h-1 bg-gradient-hero mx-auto mb-12 rounded-full" />
        
        {isLoading && (
          <div className="text-center text-muted-foreground">Loading projects...</div>
        )}

        {error && (
          <div className="text-center text-destructive">Failed to load projects. Please try again later.</div>
        )}

        {repos && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {repos.map((repo) => (
              <Card 
                key={repo.id} 
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  featuredProjects.includes(repo.name) ? "border-2 border-primary" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl line-clamp-1">{repo.name}</CardTitle>
                    {featuredProjects.includes(repo.name) && (
                      <Badge variant="default" className="ml-2 bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="line-clamp-2 min-h-[3rem]">
                    {repo.description || "No description available"}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.language && (
                      <Badge variant="secondary">{repo.language}</Badge>
                    )}
                    {repo.topics?.slice(0, 2).map((topic) => (
                      <Badge key={topic} variant="outline">{topic}</Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
