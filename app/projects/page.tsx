import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { projects } from "@/data/projects";
import { projectStats, whatsappLink } from "@/data/site";
import CtaBand from "@/components/ui/CtaBand";
import PageHero from "@/components/ui/PageHero";
import ProjectGallery from "@/components/ui/ProjectGallery";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects & Gallery — Real Installations",
  description:
    "Browse real bird netting, invisible grill, bird spike and industrial bird netting installations completed by SQUARE across Gujarat.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Our projects"
        title="Real spaces. Real results."
        lead="Every photograph here is from a job we completed. Open any project to see the property, the problem and what we actually did about it."
        image="/images/projects/project-02.webp"
        imageAlt="Apartment building with bird netting fitted across its balconies"
        crumbs={[{ label: "Projects" }]}
        actions={
          <>
            <Link href="/contact" className="btn btn--primary btn--large">
              Request a Site Visit <ArrowUpRight size={17} />
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn btn--light btn--large">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </>
        }
      />

      <section className="section section--tight">
        <div className="container">
          <div className="metrics-grid" style={{ transform: "none", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {projectStats.map((stat) => (
              <div className="metric" key={stat.label}>
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight-top">
        <div className="container">
          <SectionHeading
            eyebrow="Gallery"
            title="Filter by the work you need"
            body="Select a category to narrow the gallery, then open a card for the full case study."
          />
          <ProjectGallery projects={projects} variant="page" />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            title="Want the same result at your place?"
            body="Send us a photo on WhatsApp or book a free site visit — we will tell you exactly what your space needs."
          />
        </div>
      </section>
    </main>
  );
}
