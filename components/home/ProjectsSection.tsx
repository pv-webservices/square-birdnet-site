import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ui/ProjectGallery";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProjectsSection() {
  return (
    <section className="section section--soft" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Our projects"
          title="Real spaces. Real results."
          body="A selection of recent installations across homes, societies and commercial properties."
          action={
            <Link href="/projects" className="text-link">
              View More Projects <ArrowRight size={16} />
            </Link>
          }
        />
        <ProjectGallery projects={projects.slice(0, 6)} />
      </div>
    </section>
  );
}
