import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/seuusuario",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/seuusuario",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/seuusuario",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:seu@email.com",
    },
  ];

  return (
    <section id="contato" className="relative">
      <div className="section-container text-center">
        <p className="text-primary font-mono text-sm mb-4">05. E agora?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
          Vamos Conversar
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Estou sempre aberto a novas oportunidades e parcerias. 
          Se você tem um projeto interessante ou apenas quer trocar uma ideia, 
          não hesite em entrar em contato!
        </p>

        <a
          href="mailto:seu@email.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 hover:scale-105 font-semibold text-lg mb-16"
        >
          <Mail className="w-5 h-5" />
          Enviar Email
        </a>

        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
