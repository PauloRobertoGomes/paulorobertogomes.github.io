import { BookOpen, ArrowUpRight, Calendar } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title:
        "Sensitive periods of child development: a study on the construction and validation of the BASENP mobile application.",
      description: "REVISTA BRASILEIRA DE ENFERMAGEM",
      date: "08 Dec 2025",
      // readTime: "8 min",
      link: "http://dx.doi.org/10.1590/0034-7167-2024-0475",
      tags: ["Flutter", "Mobx"],
    },
    {
      title: "Wearable Stroke Alert System",
      description:
        "New Health of Things Approach Based on Generative AI and Datafusion for Real-Time Stroke Monitoring.",
      date: "03 Dec 2024",
      // readTime: "12 min",
      link: "http://dx.doi.org/10.1109/sbesc65055.2024.10771817",
      tags: ["Python", "Classification", "AVC"],
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
          Como fruto da minha colaboração dentro do grupo de pesquisa e do
          desenvolvimento de aplicações, publiquei alguns artigos em revistas
          cientificas referente às minhas áreas de interesse. Aqui estão alguns
          dos meus artigos mais recentes:
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
                {/* <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {article.readTime}
                </div> */}
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
      </div>
    </section>
  );
};

export default Articles;
