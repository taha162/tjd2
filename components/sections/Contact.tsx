"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader2, MapPin, Phone, Linkedin, Github, Globe } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { submitContactForm } from "@/lib/firebase";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function ContactInfo() {
  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
    { icon: Linkedin, label: "LinkedIn", value: personalInfo.linkedin, href: `https://${personalInfo.linkedin}` },
    { icon: Github, label: "GitHub", value: personalInfo.github, href: `https://${personalInfo.github}` },
    { icon: Globe, label: "Website", value: personalInfo.website, href: `https://${personalInfo.website}` },
  ];

  return (
    <div className="space-y-4">
      {contactItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <Card hover className="group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-caption text-foreground-muted uppercase tracking-wider">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-body text-foreground hover:text-accent transition-colors truncate block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-body text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  icon: Icon,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  icon: React.ElementType;
  textarea?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground-muted flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-glass border border-glass-border backdrop-blur-xl text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none",
            error && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
          )}
          placeholder={`Enter your ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-glass border border-glass-border backdrop-blur-xl text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300",
            error && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
          )}
          placeholder={`Enter your ${label.toLowerCase()}...`}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xs text-red-400 flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" gradient>
      <SectionHeader
        title="Contact Me"
        subtitle="Let's collaborate on your next project. I'm always open to new opportunities and creative challenges."
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-heading-1 text-foreground mb-6"
          >
            Get in Touch
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body text-foreground-muted mb-8 leading-relaxed"
          >
            Whether you have a project in mind, want to collaborate, or just want to say hello, 
            I'd love to hear from you. Fill out the form or reach out directly through any of the channels below.
          </motion.p>
          <ContactInfo />
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <Card className="h-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                icon={User}
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                icon={Mail}
              />
              <FormInput
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                icon={MessageSquare}
              />
              <FormInput
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                icon={MessageSquare}
                textarea
              />

              <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Message sent successfully!</span>
                  </motion.div>
                ) : submitStatus === "error" ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Failed to send message. Please try again.</span>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                icon={isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
