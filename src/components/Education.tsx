import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "Universidade Federal",
      period: "2015 - 2019",
      description: "Foco em engenharia de software e sistemas distribuídos.",
    },
    {
      degree: "MBA em Gestão de Projetos de TI",
      institution: "Instituição de Ensino",
      period: "2020 - 2021",
      description: "Metodologias ágeis e gestão de equipes de desenvolvimento.",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
    },
    {
      name: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      date: "2021",
    },
  ];

  return (
    <section id="formacao" className="relative bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="section-title">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Formação
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Educação
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-primary rounded-full" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="w-4 h-4" />
                    {item.period}
                  </div>
                  <h4 className="text-lg font-semibold">{item.degree}</h4>
                  <p className="text-primary font-mono text-sm mb-2">
                    {item.institution}
                  </p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certificações
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-primary font-mono text-sm">
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
