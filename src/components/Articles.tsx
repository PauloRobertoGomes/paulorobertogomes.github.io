import { BookOpen, ArrowUpRight, Calendar } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Construindo APIs Escaláveis com Node.js",
      description:
        "Um guia completo sobre como criar APIs RESTful escaláveis utilizando Node.js, Express e boas práticas de arquitetura.",
      date: "15 Mar 2024",
      readTime: "8 min",
      link: "https://dev.to",
      tags: ["Node.js", "API", "Backend"],
    },
    {
      title: "React Performance: Otimizações Essenciais",
      description:
        "Técnicas avançadas para otimizar a performance de aplicações React, incluindo memoização, code splitting e lazy loading.",
      date: "28 Fev 2024",
      readTime: "12 min",
      link: "https://dev.to",
      tags: ["React", "Performance", "Frontend"],
    },
    {
      title: "TypeScript: Do Básico ao Avançado",
      description:
        "Uma jornada completa pelo TypeScript, desde os conceitos básicos até padrões avançados de tipagem.",
      date: "10 Jan 2024",
      readTime: "15 min",
      link: "https://dev.to",
      tags: ["TypeScript", "JavaScript"],
    },
    {
      title: "Clean Architecture em Aplicações Web",
      description:
        "Como aplicar os princípios de Clean Architecture em projetos web modernos para criar código mais manutenível.",
      date: "05 Dez 2023",
      readTime: "10 min",
      link: "https://dev.to",
      tags: ["Arquitetura", "Clean Code"],
    },
  ];

  return (
    <section id="artigos" className="relative">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="section-title">
            <span className="text-primary font-mono text-xl mr-2">04.</span>
            Artigos
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Compartilho conhecimento através de artigos técnicos sobre desenvolvimento
          web, arquitetura de software e boas práticas.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 card-glow"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {article.readTime}
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <p className="text-muted-foreground mb-4 line-clamp-2">
                {article.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://dev.to"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-mono"
          >
            Ver todos os artigos
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
