import { Code2, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "React, TypeScript, Node.js, Python",
    },
    {
      icon: Briefcase,
      title: "Experiência",
      description: "+5 anos de experiência profissional",
    },
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Ciência da Computação",
    },
  ];

  return (
    <section id="sobre" className="relative">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="section-title">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            Sobre Mim
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e inovação. 
              Ao longo da minha carreira, tive a oportunidade de trabalhar em 
              diversos projetos desafiadores que me permitiram crescer como profissional.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Meu foco está em criar soluções elegantes e eficientes, sempre 
              buscando as melhores práticas de desenvolvimento. Acredito que 
              um bom código deve ser limpo, testável e fácil de manter.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Atualmente, estou focado em desenvolvimento web moderno, 
              utilizando tecnologias como React, Node.js e cloud computing 
              para entregar produtos de alta qualidade.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> JavaScript (ES6+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> React / Next.js
                </li>
              </ul>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> PostgreSQL
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 card-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
