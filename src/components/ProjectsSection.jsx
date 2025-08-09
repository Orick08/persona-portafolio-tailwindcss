import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description for project one.",
    image: "https://picsum.photos/id/237/400/300",
    tags: ["React", "Node.js", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for project two.",
    image: "https://picsum.photos/id/237/400/300",
    tags: ["Vue", "Firebase", "Sass"],
    link: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description for project three.",
    image: "https://picsum.photos/id/237/400/300",
    tags: ["Angular", "TypeScript", "Bootstrap"],
    link: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my recent work, showcasing a variety of projects that
          highlight my skills and experience in web development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full objec-cover transition-transform duration-5x00 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />{" "}
                    </a>
                    <a
                      href="#"
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
            href="#"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
