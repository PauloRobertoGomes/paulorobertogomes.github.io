import { ExternalLink, Github, Folder } from "lucide-react";

type FeaturedProject = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
};

const Projects = () => {
  const featuredProjects: FeaturedProject[] = [
    {
      title: "Projeto Libélula",
      description:
        "Aplicação Web e Mobile para assistência e conscientização sobre Cancer de Colo do Útero.",
      tech: ["Flutter", "Flutter Modular", "Mobx", "Firebase"],
      live: "https://projeto-libelula.infinityfreeapp.com/",
      image: new URL("../assets/projects/projeto-libelula.png", import.meta.url)
        .href,
    },
    {
      title: "Períodos Sensíveis",
      description:
        "Aplicação Web informativa para auxiliar mães com os cuidados e evoluções dos bebês nos primeiros anos de vida.",
      tech: ["Flutter", "Flutter Modular", "MobX"],
      live: "https://periodossensiveis.infinityfreeapp.com/",
      image: new URL(
        "../assets/projects/periodos-sensiveis.png",
        import.meta.url
      ).href,
    },
    {
      title: "ESA Tool",
      description:
        "Aplicação Web escrita em R para analise e predição de dados usando técnicas de series temporais.",
      tech: ["R", "Shiny", "Docker"],
      live: "https://example.com",
      image: new URL("../assets/projects/esa-tool.png", import.meta.url).href,
    },
  ];

  const otherProjects: FeaturedProject[] = [
    {
      title: "Identoolfier Flutter",
      description:
        "Aplicativo móvel para identificação de objetos através de fotos.",
      tech: ["Flutter"],
      // github: "https://github.com",
    },
    {
      title: "OpenCV App",
      description:
        "Aplicação flutter para testes de processamento de imagens usando a OpenCV.",
      tech: ["Flutter", "OpenCV"],
      // github: "https://github.com/PauloRobertoGomes/firebase_todo_app",
    },
    {
      title: "Nitro Quiz",
      description:
        "Jogo simples de perguntas e respostas desenvolvido com Flutter",
      tech: ["Fluter", "MobX"],
      // github: "https://github.com/PauloRobertoGomes/projeto-final-sd/tree/main",
    },
  ];

  return (
    <section id="projetos" className="relative">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="section-title">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Projetos
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 relative ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1
                    ? "md:left-0 md:text-left"
                    : "md:right-0 md:text-right"
                } z-10`}
              >
                <p className="text-primary font-mono text-sm mb-2">
                  Projeto em Destaque
                </p>
                <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="bg-card p-6 rounded-xl shadow-xl mb-4 border border-border">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-center mb-8">Outros Projetos</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <a
              key={project.title}
              href={project.github || project.live || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-glow group"
            >
              <div className="flex items-center justify-between mb-6">
                <Folder className="w-10 h-10 text-primary" />
                {/* <div className="flex gap-3">
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div> */}
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
