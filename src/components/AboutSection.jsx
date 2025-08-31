import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              Mechatronics Engineer and Computer Science student 
              focused on Artificial Intelligence. Skilled in Computer Vision 
              (OpenCV, YOLO, PyTorch, OCR), real-time control systems, 
              and advanced Python programming.
            </p>

            <p className="text-muted-foreground">
              Experienced in ROS, camera systems, and AI-driven automation. 
              Received international training in AI, Cloud, and 5G through 
              a Huawei scholarship, complemented by Frontend Development 
              training from Meta and Google for building user-focused digital solutions.
            </p>
            <p className="text-muted-foreground">
              Represented Bolivia in the NASA Human Exploration Rover Challenge 2025, 
              demonstrating teamwork, innovation, and problem-solving under pressure. 
              Passionate about applying AI, computer vision, and software development 
              to real-world challenges in technology, logistics, and aerospace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Portafolio/Grace_Luna_Verdueta_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Mechatronics Engineering Student</h4>
                  <p className="text-muted-foreground">
                    Merging hardware, electronics, and intelligent systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Computer Science student</h4>
                  <p className="text-muted-foreground">
                    Programming future solutions through algorithms and code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI, Cloud, and 5G</h4>
                  <p className="text-muted-foreground">
                    Synergizing intelligent networks with high-speed connectivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
