"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Trophy, Star, Users, Brain, MessageCircle, Heart, Lightbulb } from "lucide-react";
import { education, certificates, achievements, skills, events } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
    >
      <Card tilt className="h-full">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-heading-1 text-foreground mb-1">{edu.institution}</h3>
            <p className="text-body text-foreground-muted mb-2">{edu.degree}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-foreground-subtle">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {edu.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {edu.location}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function CertificateCard({ cert, index }: { cert: typeof certificates[0]; index: number }) {
  const icons = {
    course: BookOpen,
    certification: Award,
    workshop: Star,
    event: Calendar,
  };
  const Icon = icons[cert.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
    >
      <Card hover className="h-full">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-accent-cyan" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-body font-medium text-foreground mb-1">{cert.title}</h4>
            <p className="text-body-sm text-foreground-muted">{cert.issuer}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function AchievementCard({ achievement, index }: { achievement: typeof achievements[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
    >
      <Card glow className="h-full border-amber-500/20">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
            <Trophy className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h3 className="text-heading-2 text-foreground mb-1">{achievement.title}</h3>
            <p className="text-sm text-amber-400 font-medium mb-2">{achievement.year}</p>
            <p className="text-body-sm text-foreground-muted">{achievement.description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  if (!skill.level) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-body-sm text-foreground group-hover:text-accent transition-colors">{skill.name}</span>
        <span className="text-caption text-foreground-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-background-elevated rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-cyan"
        />
      </div>
    </motion.div>
  );
}

function SoftSkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const icons = {
    "Team Leadership": Users,
    "Effective Communication": MessageCircle,
    "Teamwork & Collaboration": Users,
    "Emotional Intelligence": Heart,
    "Problem Solving": Lightbulb,
  };
  const Icon = icons[skill.name as keyof typeof icons] || Brain;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-glass border border-glass-border hover:border-accent/20 transition-all duration-300 group">
        <Icon className="w-5 h-5 text-accent group-hover:text-accent-cyan transition-colors" />
        <span className="text-body-sm text-foreground">{skill.name}</span>
      </div>
    </motion.div>
  );
}

function LanguageCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const proficiencyColors = {
    Native: "from-emerald-500 to-emerald-400",
    B2: "from-accent to-accent-cyan",
    Basics: "from-foreground-muted to-foreground-subtle",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <Card className="text-center">
        <h4 className="text-heading-2 text-foreground mb-2">{skill.name}</h4>
        <span className={cn(
          "inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r text-white",
          proficiencyColors[skill.proficiency as keyof typeof proficiencyColors] || "from-accent to-accent-cyan"
        )}>
          {skill.proficiency}
        </span>
      </Card>
    </motion.div>
  );
}

export function About() {
  const technicalSkills = skills.filter((s) => s.category === "technical" && s.level);
  const softSkills = skills.filter((s) => s.category === "soft");
  const languages = skills.filter((s) => s.category === "language");

  return (
    <SectionWrapper id="about" gradient>
      <SectionHeader
        title="About Me"
        subtitle="A passionate Mechatronics Engineering student with a blend of technical expertise and creative design skills"
      />

      <div className="max-w-6xl mx-auto space-y-20">
        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-display-3 mb-8 flex items-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-accent" />
            Education
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-display-3 mb-8 flex items-center gap-3"
          >
            <Trophy className="w-8 h-8 text-amber-400" />
            Achievements
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        </div>

        {/* Certificates & Courses */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-display-3 mb-8 flex items-center gap-3"
          >
            <Award className="w-8 h-8 text-accent-purple" />
            Certificates & Courses
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Events/Workshops */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-display-3 mb-8 flex items-center gap-3"
          >
            <Calendar className="w-8 h-8 text-accent-cyan" />
            Events & Workshops
          </motion.h3>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {events.map((event, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-3 px-5 py-4 rounded-xl bg-glass border border-glass-border">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                  <span className="text-body text-foreground-muted">{event}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-display-3 mb-8 flex items-center gap-3"
          >
            <Star className="w-8 h-8 text-accent" />
            Skills
          </motion.h3>

          {/* Technical Skills */}
          <div className="mb-12">
            <h4 className="text-heading-1 text-foreground-muted mb-6">Technical Skills</h4>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-12">
            <h4 className="text-heading-1 text-foreground-muted mb-6">Soft Skills</h4>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <SoftSkillCard key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-heading-1 text-foreground-muted mb-6">Languages</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {languages.map((skill, index) => (
                <LanguageCard key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
