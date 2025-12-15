import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in">
            Olá, meu nome é
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up font-display">
            Paulo Roberto
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6 animate-slide-up stagger-1">
            Desenvolvedor <span className="text-gradient">Full-Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 animate-slide-up stagger-2 leading-relaxed">
            Apaixonado por criar experiências digitais incríveis. Especializado
            em Flutter e React Native, além de experiências com ferramentas
            modernas para aplicações Web como ReactJS.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up stagger-3">
            <a
              href="https://github.com/PauloRobertoGomes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-105 group"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/paulo-roberto-gomes-abreu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-105 group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:paulo.roberto.gomes.2001@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Contato</span>
            </a>
          </div>
        </div>

        <a
          href="#sobre"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
