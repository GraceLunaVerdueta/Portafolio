import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hydrobot Project",
    description: "An Autonomous, Solar-Powered USV Platform for High-Resolution Water Sampling. Conducted field testing in Río Desaguadero, Puente Español, and Achocalla, and led embedded systems development. Recognized for contributions to research, innovation, and STEM outreach in rural Oruro.",
    image: "/Portafolio/hydrobot.png",
    tags: ["Embedded_System", "ROS", "Automation","Electronics","Scientific_Outreach","Programming"],
    demoUrl: "https://hydrobot.solutions/",
    githubUrl: "https://hydrobot.solutions/",
  },
  {
    id: 2,
    title: "NASA Human Exploration Rover Challenge 2025",
    description:"Designing and operating a lunar terrain vehicle. Ranked in the top 5 during one competition day and received the Social Media Award for documenting mechanical work and STEAM outreach.",
    image: "/Portafolio/herc.png",
    tags: ["Mechanical_Design", "Structural_Analysis", "STEM_Outreach_&_Education","Team_Collaboration"],
    demoUrl: "https://vemecherc.wixsite.com/vemec",
    githubUrl: "https://vemecherc.wixsite.com/vemec",
  },
  {
    id: 3,
    title: "Huawei - Seeds for the Future",
    description:
      "Selected as one of the top 10 Bolivian university students for the 'Seeds for the Future' program. Scholarship awarded by Huawei to receive instruction and mentorship from industry experts in AI, 5G, and Cloud Computing.",
    image: "/Portafolio/huawei.png",
    tags: ["IA", "5G", "Cloud_Computing"],
    demoUrl: "https://www.huawei.com/mx/news/mx/2024/seeds-for-the-future-bolivia",
    githubUrl: "https://www.huawei.com/mx/news/mx/2024/seeds-for-the-future-bolivia",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects and Awards</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
