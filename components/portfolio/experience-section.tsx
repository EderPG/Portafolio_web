"use client"

import { useRef, useEffect, useState } from "react"

const experiences = [
  {
    period: "2025 Febrero - Septiembre",
    role: "Desarrollador Fullstack - Plugin Moodle",
    company: "Residente Profesional / ENES UNAM Campus Morelia",
    url: "#",
    description: "Diseño y desarrollo desde cero de un plugin personalizado para Moodle escrito en PHP. Implementación de lógicas de backend complejas e interacción con la base de datos de Moodle para la ENES UNAM Campus Morelia.",
    technologies: ["PHP", "MySQL", "Moodle API", "Backend"],
  },
  {
    period: "2024 Enero - Junio",
    role: "Desarrollador Fullstack",
    company: "Segmich",
    url: "#",
    description: "Software para recopilar datos según las diferentes organizaciones que componian a cada junta de gobierno utilizando webscrapping.",
    technologies: ["React", "AWS", "Web Scraping"],
  },
  {
    period: "2023 Agosto - Diciembre",
    role: "Desarrollador Fullstack",
    company: "Sisogem",
    url: "#",
    description: "Sistema para manejar las distintas dependencias que componian al gobierno para facilitar la gestion e intercambio de documentos de forma segura.",
    technologies: ["React", "AWS", "Google APIs"],
  },
  {
    period: "2023 Enero - Junio",
    role: "Desarrollador / Diseñador",
    company: "CCENT",
    url: "#",
    description: "Sitio web para publicitar institución educativa incluyendo creación y diseño de sistemas internos corporativos modernos.",
    technologies: ["Django", "MySQL", "Frontend Design"],
  },
]

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div className="hidden md:block relative">
        <span className="absolute top-2 right-0 w-3 h-3 rounded-full border-2 border-primary bg-background z-10" />
        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
          {experience.period}
        </span>
      </div>

      <div className="relative pl-8 md:pl-8 pb-12 border-l border-border md:border-l">
        {/* Mobile period */}
        <span className="md:hidden font-mono text-xs text-muted-foreground block mb-2">
          {experience.period}
        </span>

        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
          {experience.role}{" "}
          <span className="text-primary">
            {"· "}
            <a
              href={experience.url}
              className="hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          </span>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-primary text-sm">02.</span>
          <h2 className="text-3xl font-bold text-foreground">Experiencia</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} experience={exp} index={i} />
          ))}
        </div>

        {/* Resume link */}
        <div className="mt-12 text-center">
          <a
            href="/Portafolio_web/CV_Palomino_Eder.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono text-sm rounded-lg hover:bg-primary/10 transition-all"
          >
            Descargar CV Completo
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
