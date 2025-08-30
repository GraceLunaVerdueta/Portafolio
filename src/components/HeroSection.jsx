import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Texto alineado a la izquierda */}
        <div className="text-left space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Grace</span>
            <span
              className="ml-2 opacity-0 animate-fade-in-delay-1"
              style={{ color: "#BEB8EB" }}
            >
              Luna
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Verdueta
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3 text-justify">
            
            <span style={{ color: "#BEB8EB" }}>Mechatronic engineer</span> with
            experience in real-time{" "}
            <span style={{ color: "#BEB8EB" }}>control systems</span> for a
            microsatellite development, and advanced programming. Skilled in
            teamwork and problem-solving under pressure, with international
            training in <span style={{ color: "#BEB8EB" }}>AI</span>,{" "}
            <span style={{ color: "#BEB8EB" }}>cloud</span>, and{" "}
            <span style={{ color: "#BEB8EB" }}>5G</span> (Huawei scholarship).
            Actively engaged in <span style={{ color: "#BEB8EB" }}>STEAM</span>{" "}
            outreach and seeking opportunities to apply and expand these skills
            in innovative projects.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Foto circular alineada a la derecha */}
        <div className="mt-0 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-[0_0_100px_rgba(255,255,255,0.8)] overflow-hidden">
            <img
              src="foto.png" // 👉 aquí pones la ruta de tu foto
              alt="Grace Luna Verdueta"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Flecha scroll abajo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
