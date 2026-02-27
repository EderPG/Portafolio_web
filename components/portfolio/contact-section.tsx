"use client"

import { useState, useRef, useEffect } from "react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focused, setFocused] = useState<string | null>(null)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // placeholder for form submission
  }

  return (
    <section id="contact" className="relative py-32 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-primary text-sm">04.</span>
          <h2 className="text-3xl font-bold text-foreground">Contacto</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <p className="text-muted-foreground leading-relaxed mb-12">
          Siempre estoy abierto a nuevas oportunidades y colaboraciones
          interesantes. Si tienes un proyecto en mente o simplemente quieres
          conectar, no dudes en escribirme.
        </p>

        {/* Terminal-style form */}
        <div className="rounded-xl border border-border bg-card overflow-hidden code-shadow">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono text-xs text-muted-foreground ml-2">
              contact --send-message
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Name field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block font-mono text-xs text-muted-foreground"
              >
                <span className="text-primary">const</span> nombre ={" "}
                <span className="text-[#c3e88d]">
                  {'"'}
                  {formState.name || (focused === "name" ? "" : "...")}
                  {'"'}
                </span>
              </label>
              <input
                id="name"
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block font-mono text-xs text-muted-foreground"
              >
                <span className="text-primary">const</span> email ={" "}
                <span className="text-[#c3e88d]">
                  {'"'}
                  {formState.email || (focused === "email" ? "" : "...")}
                  {'"'}
                </span>
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                placeholder="tu@email.com"
              />
            </div>

            {/* Message field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block font-mono text-xs text-muted-foreground"
              >
                <span className="text-primary">const</span> mensaje ={" "}
                <span className="text-[#c3e88d]">{"`"}</span>
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={5}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                placeholder="Escribe tu mensaje aqui..."
              />
              <span className="block font-mono text-xs text-[#c3e88d]">{"`"}</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,229,191,0.3)] transition-all active:scale-[0.98]"
            >
              {"enviarMensaje()"}
            </button>
          </form>
        </div>

        {/* Or email directly */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          O escribe directamente a{" "}
          <a
            href="mailto:cato0271@gmail.com"
            className="text-primary hover:underline underline-offset-4 font-mono"
          >
            cato0271@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
