import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { TerminalSection } from "@/components/portfolio/TerminalSection";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications, Education, Blog } from "@/components/portfolio/Sections";
import { Resume } from "@/components/portfolio/Resume";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { OWNER } from "@/components/portfolio/data";

const SITE_URL = "https://sowmya.wieetech.com";
const TITLE = "Sowmya Lalam | Cybersecurity Analyst";
const DESCRIPTION =
  "Official portfolio of Sowmya Lalam, a cybersecurity analyst specializing in network security, threat analysis, ethical hacking, SIEM, and vulnerability assessment.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: OWNER.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Sowmya Lalam" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Sowmya Lalam",
              alternateName: "Sowmya.Lalam Cybersecurity Portfolio",
              description: DESCRIPTION,
              inLanguage: "en-US",
            },
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#sowmya-lalam`,
              url: SITE_URL,
              name: OWNER.name,
              alternateName: "Lalam Sowmya",
              jobTitle: OWNER.role,
              email: `mailto:${OWNER.email}`,
              description: OWNER.bio,
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "University of Maryland, Baltimore County",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Aditya College of Engineering and Technology",
                },
              ],
              knowsAbout: [
                "Cybersecurity",
                "Network Security",
                "Ethical Hacking",
                "Threat Analysis",
                "Vulnerability Assessment",
                "Security Information and Event Management",
                "Wireshark",
                "Nmap",
                "Splunk",
              ],
              sameAs: [OWNER.linkedin, OWNER.github],
              mainEntityOfPage: { "@id": `${SITE_URL}/#website` },
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TerminalSection />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
