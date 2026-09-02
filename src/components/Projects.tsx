import { useIsMobile } from "../hooks/useIsMobile";
import singeImg from "../assets/images/singe.png";
import melodyImg from "../assets/images/melody.png";
import StrasgiteImg from "../assets/images/strasgite.png";
import ticketflowImg from "../assets/images/ticketflow.png";
import cvImg from "../assets/images/cvimage.png";
import pepite from "../assets/images/pepite.svg";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Un singe en Hiver",
    description: "Premier projet solo en formation. Site vitrine d'un restaurant conçu entièrement en HTML et CSS pur, sans framework. Mise en page responsive et travail approfondi sur la sémantique.",
    image: singeImg,
    technologies: ["HTML", "CSS"],
    link: "https://github.com/sophiemorales6440/premier-site.git",
  },
  {
    id: 2,
    title: "Melody Factory",
    description: "Jeu de type clicker développé en JavaScript vanilla en équipe. Gestion des événements, logique de score et animations. Maquette réalisée sur Figma avant intégration.",
    image: melodyImg,
    technologies: ["Javascript", "Figma"],
    link: "https://melody-factoryprojects1.vercel.app/",
  },
  {
    id: 3,
    title: "Strasgite",
    description: "Site vitrine d'un gite alsacien développé en équipe. Responsable de la maquette Figma, des composants React, du routing, des appels API, du design responsive sur-mesure (mobile first) et de la charte graphique de l'ensemble du site.",
    image: StrasgiteImg,
    technologies: ["Vite", "React", "Figma"],
    link: "https://projetstrasgite.vercel.app/",
  },
  {
    id: 4,
    title: "TicketFlow",
    description: "Application full stack de gestion de tickets SAV développée en équipe de 5. Architecture MVC, CRUD complet, authentification et gestion des roles. Projet de fin de formation Wild Code School.",
    image: ticketflowImg,
    technologies: ["React", "TypeScript", "Node.js", "MySQL"],
    link: "https://p3-ticketflow-front.vercel.app/login",
  },
  {
    id: 5,
    title: "Pépite",
    description: "Plateforme de gestion des prospects immobiliers pour agents commerciaux, développée à partir d'une commande client réelle. Frontend en React avec intégration d'une API REST, backend en Node.js avec Express et base de données MySQL. Correction de bugs complexes sur la logique de calcul des commissions et sur la messagerie instantanée entre apporteurs d'affaires.",
    image: pepite,
    technologies: ["React", "API", "MySQL"],
    link: "https://pepite-frontend-one.vercel.app/login"
  },
  {
    id: 6,
    title: "Mon CV",
    description: "Mon curriculum vitae à télécharger.",
    image: cvImg,
    technologies: ["React", "TypeScript"],
    link: "/CV_Sophie_Morales_Developpeuse_Web.pdf",
  },
];

export default function Projects() {
  const isMobile = useIsMobile();

  return (
    <section id="projects" style={{ background: "#f8f4ef", padding: isMobile ? "60px 24px" : "80px 40px", fontFamily: "'DM Sans', sans-serif" }}>

      <div style={{ maxWidth: "1100px", margin: "0 auto 60px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <p style={{ fontSize: "11px", letterSpacing: ".15em", textTransform: "uppercase", color: "#c17f24", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "#c17f24" }} />
            Réalisations
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1, color: "#2a1f0e" }}>
            Mes <em style={{ fontStyle: "italic", color: "#c17f24" }}>projets</em>
          </h2>
        </div>
        <span style={{ fontSize: "13px", color: "#999" }}>{projects.length} projets</span>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))", gap: "1px", border: "1px solid #e0d5c0" }}>
        {projects.map((project) => (
          <article
            key={project.id}
            style={{ background: "#f8f4ef", display: "flex", flexDirection: "column", borderBottom: "1px solid #e0d5c0" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#f0e6d3")}
            onMouseLeave={e => (e.currentTarget.style.background = "#f8f4ef")}
          >
            <div style={{ overflow: "hidden", aspectRatio: "16/9", borderBottom: "1px solid #e0d5c0" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .4s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>

            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", color: "#c17f24", fontStyle: "italic" }}>
                  0{project.id}
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#2a1f0e", fontWeight: 700 }}>
                  {project.title}
                </h3>
              </div>

              <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6 }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.technologies.map(tech => (
                  <span key={tech} style={{ fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", padding: "4px 12px", border: "1px solid #e0d5c0", borderRadius: "2px", color: "#666" }}>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                download={project.id === 6 ? "CV_Sophie_Morales.pdf" : undefined}
                style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid #e0d5c0", fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase", color: "#c17f24", textDecoration: "none", display: "block" }}
              >
                  {project.id === 6 ? "Voir mon CV" : "Voir le projet"}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}