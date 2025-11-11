import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/MohamedAmineZinabi" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/mohamed-amine-zinabi/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:zinabimedamine@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Mohamed Amine ZINABI. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
