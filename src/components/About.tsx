import { Code2, Briefcase, GraduationCap, Microscope } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Flutter, React Native, ReactJS, Node.js",
    },
    {
      icon: Briefcase,
      title: "Experiência",
      description: "+2 anos de experiência profissional",
    },
    {
      icon: Microscope,
      title: "Pesquisa",
      description: "+5 anos atuando em grupos de pesquisa acadêmica",
    },
    {
      icon: GraduationCap,
      title: "Formação",
      description: "Engenharia da Computação",
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
              Sou um Desenvolvedor Full-Stack focado em Mobile, apaixonado por
              inovação e por criar soluções digitais que geram impacto real.
              Minha formação em Engenharia da Computação é complementada por uma
              sólida base autodidata. Busco constantemente usar a tecnologia,
              especialmente em saúde e pesquisa, como uma ferramenta poderosa
              para a transformação.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Atualmente, atuo na Co.Urban desenvolvendo apps robustos com
              Flutter e React Native. Tenho forte domínio em Python, NodeJS e
              Docker. Nos grupos LISIA e PROSAS, aplico expertise em Visão
              Computacional e Processamento de Imagens. Também dedico tempo à
              mentoria e criação de soluções para projetos de Mestrado.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Meu compromisso é entregar código elegante, eficiente e, acima de
              tudo, escalável. Acredito que a excelência técnica deve andar de
              mãos dadas com a aplicação prática. Busco sempre as melhores
              arquiteturas para garantir segurança e performance, definindo o
              futuro do desenvolvimento móvel e sistemas inteligentes.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> Flutter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> MobX
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> Flutter Modular
                </li>
              </ul>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> ReactJS / Native
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▸</span> NodeJS
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
