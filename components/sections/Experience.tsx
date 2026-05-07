"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight, Sparkles } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

function ExperienceCard({ exp, index }: { exp: typeof experience[0]; index: number }) {
  const isPrimary = exp.type === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < experience.length - 1 && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-accent/30 to-transparent hidden md:block" />
      )}

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="hidden md:flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: "spring" }}
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 z-10",
              isPrimary
                ? "bg-accent/20 border border-accent/30"
                : "bg-glass border border-glass-border"
            )}
          >
            <Briefcase className={cn("w-5 h-5", isPrimary ? "text-accent" : "text-foreground-muted")} />
          </motion.div>
        </div>

        {/* Card */}
        <div className="flex-1">
          <Card
            tilt={isPrimary}
            glow={isPrimary}
            className={cn(
              "transition-all duration-500",
              isPrimary && "border-accent/20"
            )}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-heading-1 text-foreground">{exp.role}</h3>
                  {isPrimary && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                      Primary
                    </span>
                  )}
                </div>
                <p className="text-body text-foreground-muted">{exp.organization}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground-subtle bg-glass px-3 py-1.5 rounded-lg">
                <Calendar className="w-4 h-4" />
                {exp.duration}
              </div>
            </div>

            <p className="text-body text-foreground-muted mb-4 leading-relaxed">
              {exp.description}
            </p>

            {exp.highlights && (
              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-glass border border-glass-border text-foreground-muted"
                  >
                    <Sparkles className="w-3 h-3 text-accent-cyan" />
                    {highlight}
                  </motion.span>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        title="Experience"
        subtitle="Professional journey combining creative design, technical development, and engineering expertise"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((exp, index) => (
          <ExperienceCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
