import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceIndex } from "@/data/services";
import { serviceAreaList } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/** Every job we do, each linking to the page that explains it. */
export default function ServiceIndex() {
  return (
    <section className="section" id="all-services">
      <div className="container">
        <SectionHeading
          eyebrow="Everything we install"
          title="Bird netting, invisible grill & net services across Gujarat"
          body={`One experienced team for every job below, serving ${serviceAreaList}.`}
        />
        <Reveal className="service-index">
          {serviceIndex.map((item) => (
            <Link key={item.title} href={item.href} className="service-index__item">
              <span>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
