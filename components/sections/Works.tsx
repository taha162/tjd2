"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Layers, Code2, Palette, Wrench, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const categories = [
  { label: "All", value: "all", icon: Layers },
  { label: "Design", value: "Design", icon: Palette },
  { label: "Programming", value: "Programming", icon: Code2 },
  { label: "Engineering", value: "Engineering", icon: Wrench },
];

const categoryColors = {
  Design: "from-pink-500/20 to-purple-500/20 border-pink-500/30",
  Programming: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  Engineering: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
};

const categoryIcons = {
  Design: Palette,
  Programming: Code2,
  Engineering: Wrench,
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const Icon = categoryIcons[project.category] || Layers;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <Card tilt glow className="h-full group cursor-pointer">
        <div className="relative overflow-hidden rounded-xl mb-5 bg-background-elevated aspect-video flex items-center justify-center">
          {/* Placeholder pattern */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-50",
            categoryColors[project.category] || "from-accent/10 to-accent-purple/10"
          )} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-glass border border-glass-border backdrop-blur-xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-foreground-muted" />
            </div>
            <span className="text-xs text-foreground-subtle uppercase tracking-wider">{project.category}</span>
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="w-14 h-14 rounded-full bg-accent/20 backdrop-blur-xl border border-accent/30 flex items-center justify-center"
            >
              <ArrowUpRight className="w-6 h-6 text-accent" />
            </motion.div>
          </motion.div>
        </div>

        <h3 className="text-heading-1 text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-body-sm text-foreground-muted mb-4 leading-relaxed">
          {project.description}
        </p>

        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg text-xs bg-glass border border-glass-border text-foreground-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Card>
    </motion.div>
  );
}

export function Works() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="works" gradient>
      <SectionHeader
        title="My Works"
        subtitle="A showcase of projects spanning design, programming, and engineering disciplines"
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.value;

          return (
            <motion.button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                isActive
                  ? "text-foreground"
                  : "text-foreground-muted hover:text-foreground"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-glass border border-glass-border rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="w-4 h-4" />
                {category.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Projects grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
