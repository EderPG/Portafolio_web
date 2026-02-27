"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "HTML & CSS", level: 89 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 81 },
  { name: "TailwindCSS", level: 60 },
  { name: "Next.js", level: 40 },
  { name: "PHP / Moodle Backend", level: 93 },
  { name: "Project Management", level: 94 },
  { name: "Trabajo en Equipo", level: 92 },
]

const codeSnippet = `interface Engineer {
  name: string;
  role: "Full-Stack" | "Backend" | "Systems";
  passion: string[];
  solve(problem: Complex): Solution;
}

const eder: Engineer = {
  name: "Eder Uriel Palomino Garcia",
  role: "Systems",
  passion: [
    "clean-architecture",
    "scalable-systems",
    "developer-experience"
  ],
  solve: (problem) => {
    return architect(problem)
      .then(implement)
      .then(optimize)
      .then(deploy);
  }
};`

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-[#0ea5e9] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-primary text-sm">01.</span>
          <h2 className="text-3xl font-bold text-foreground">Sobre mi</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Soy un Ingeniero en Sistemas apasionado por enfrentar proyectos nuevos y resolver problemas reales.
              Me destaco por mi proactividad y disposicion para trabajar en equipo, priorizando siempre la eficiencia en el desarrollo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mi viaje en la tecnologia comenzo con la curiosidad de crear cosas desde cero. Hoy, mantengo y mejoro la busqueda
              continua de soluciones con creatividad, con el objetivo de aprender algo nuevo todos los dias.
            </p>

            {/* Skills */}
            <div className="pt-6 space-y-4">
              <h3 className="font-mono text-sm text-primary mb-6">
                {"// Habilidades principales"}
              </h3>
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>

          {/* Right side - Code block */}
          <div className="relative">
            <div className="sticky top-28">
              <div className="rounded-xl border border-border bg-card overflow-hidden code-shadow">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground ml-2">
                    about.ts
                  </span>
                </div>
                {/* Code */}
                <div className="p-5 overflow-x-auto">
                  <pre className="font-mono text-xs sm:text-sm leading-6">
                    {codeSnippet.split("\n").map((line, i) => (
                      <div key={i} className="flex">
                        <span className="inline-block w-8 text-right mr-4 text-muted-foreground/40 select-none">
                          {i + 1}
                        </span>
                        <code>
                          <SyntaxLine line={line} />
                        </code>
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SyntaxLine({ line }: { line: string }) {
  // Simple syntax highlighting
  const highlighted = line
    .replace(
      /\b(interface|const|string|return|type)\b/g,
      "<span class='text-[#c792ea]'>$1</span>"
    )
    .replace(
      /\b(Engineer|Complex|Solution)\b/g,
      "<span class='text-[#ffcb6b]'>$1</span>"
    )
    .replace(
      /"([^"]*?)"/g,
      "<span class='text-[#c3e88d]'>\"$1\"</span>"
    )
    .replace(
      /\/\/.*/g,
      "<span class='text-muted-foreground/60'>$&</span>"
    )
    .replace(
      /\b(name|role|passion|solve)\b(?=\s*[:?])/g,
      "<span class='text-[#82aaff]'>$1</span>"
    )
    .replace(
      /\b(architect|implement|optimize|deploy)\b/g,
      "<span class='text-[#82aaff]'>$1</span>"
    )
    .replace(
      /\.then/g,
      ".<span class='text-[#82aaff]'>then</span>"
    )

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />
}
