import { useEffect, useState } from "react";
import { Github, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    name: "PyQuake-cli",
    description: "A python application that uses the USGS hourly feed and displays it in terminal",
    language: "Python",
    icon: "🌍",
    link: "https://github.com/WalkTheEarth/PyQuake-cli"
  },
  {
    name: "ratlocker",
    description: "A proof-of-concept harmless ransomware",
    language: "PowerShell",
    icon: "🔒",
    link: "https://github.com/WalkTheEarth/ratlocker"
  },
  {
    name: "EarthquakeDataCenters",
    description: "List of Seedlink, Earthworm, Winston Wave Server DataCenters",
    language: "Data",
    icon: "📊",
    link: "https://github.com/WalkTheEarth/EarthquakeDataCenters"
  },
  {
    name: "SQLADL",
    description: "A downloader/scraper for SQA past exams",
    language: "Python",
    icon: "📚",
    link: "https://github.com/WalkTheEarth/SQLADL"
  },
  {
    name: "PocketLab",
    description: "pocket-sized homelab",
    language: "Infrastructure",
    icon: "🔬",
    link: "https://github.com/WalkTheEarth/PocketLab"
  },
  {
    name: "StartIsCracked",
    description: "StartIsBack Crack",
    language: "PowerShell",
    icon: "⚡",
    link: "https://github.com/WalkTheEarth/StartIsCracked"
  }
];

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "WalkTheEarth";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <Terminal className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient glow">
              {displayText}
              {showCursor && <span className="text-primary">_</span>}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Developer passionate about creating unique command-line tools and fun demos.
            Turning data into exciting experiences.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gradient">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border card-glow">
              <CardHeader>
                <CardTitle className="text-primary">Who I Am</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  Hi, I'm Jakub Kuriata, also known as WalkTheEarth. I'm a student developer based in Dunfermline, UK,
                  with a passion for exploring different programming languages and creating practical tools.
                </p>
                <p>
                  I love turning complex data into accessible experiences and building projects that blend
                  creativity with technical skill.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border card-glow">
              <CardHeader>
                <CardTitle className="text-primary">Skills & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    <span>Python, PowerShell, JavaScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    <span>CLI Tools & Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    <span>Data Visualization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    <span>Creative Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    <span>Open Source Projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gradient">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 card-glow group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-4xl">{project.icon}</span>
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">
                      {project.language}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Feel free to reach out! I love connecting with fellow developers and enthusiasts.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="mailto:jakubkuriata@protonmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a 
                href="https://github.com/WalkTheEarth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 WalkTheEarth. Built with passion and code.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
