import { Experience, Education, Certificate, Achievement, Skill, Project, GalleryImage } from "@/types";

export const personalInfo = {
  name: "Taha Jasim Mohammed Syala",
  title: "Mechatronics Engineer",
  email: "tahajasim.info@gmail.com",
  phone: "07703947744",
  location: "Mosul, Iraq",
  linkedin: "in/tjd162",
  github: "github.com/taha162",
  website: "tjd162.vercel.app",
  summary: "A passionate Mechatronics Engineering student combining technical expertise with creative design skills. Experienced in graphic design, UI/UX design, and no-code development with a strong foundation in engineering principles and programming.",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "University of Mosul",
    degree: "Mechatronics Engineering",
    duration: "Nov 2024 – Ongoing",
    location: "Mosul, Iraq",
  },
  {
    id: "edu-2",
    institution: "Nineveh Secondary School for Superior Students",
    degree: "Secondary School Diploma",
    duration: "Oct 2018 – Oct 2024",
    location: "Mosul, Iraq",
  },
];

export const experience: Experience[] = [
  {
    id: "exp-1",
    role: "Graphic Designer",
    organization: "Freelance (Remote)",
    duration: "Jul 2023 – Present",
    description: "Designed and fully produced the 'Al-Bu'rah Engineering' magazine, including layout, typography, and visual identity, for publication by the University of Mosul. Designed posters and social media visuals for clients including Shams Al-Adab, Mustafa's Math, Hosh Al-Khan, DDM Channel, and Alajwad.",
    type: "primary",
    highlights: [
      "Magazine design & production",
      "Brand identity development",
      "Social media visual design",
      "Client collaboration",
    ],
  },
  {
    id: "exp-2",
    role: "No-Code Android App Developer",
    organization: "Freelance (Remote)",
    duration: "Jul 2019 – May 2022",
    description: "Developed multiple Android apps using Sketchware, including a school app used to send homework and announcements remotely during the COVID-19 pandemic.",
    type: "primary",
    highlights: [
      "Android app development",
      "Educational technology solutions",
      "Remote communication tools",
    ],
  },
  {
    id: "exp-3",
    role: "UI Designer",
    organization: "Freelance (Remote)",
    duration: "Jan 2022 – Feb 2023",
    description: "Designed UI/UX projects using Adobe XD, including a project for Anas.",
    type: "secondary",
    highlights: ["UI/UX design", "Adobe XD proficiency", "Client projects"],
  },
  {
    id: "exp-4",
    role: "Microsoft Office Specialist",
    organization: "Freelance (Remote)",
    duration: "Jun 2019 – Present",
    description: "Created reports, documents, and presentations using Microsoft Word and Excel.",
    type: "secondary",
    highlights: ["Document creation", "Report writing", "Presentation design"],
  },
];

export const certificates: Certificate[] = [
  { id: "cert-1", title: "TOT Course (40 hrs)", issuer: "Meshkat Education", type: "course" },
  { id: "cert-2", title: "Elements of AI for Business (4 weeks)", issuer: "University of Helsinki", type: "course" },
  { id: "cert-3", title: "Certificate of Virtual Participation in Youth Lead Dialogue", issuer: "UN", type: "event" },
  { id: "cert-4", title: "Turkish Language Course (72 hrs)", issuer: "Turkmen Brotherhood Club", type: "course" },
  { id: "cert-5", title: "English Language Course (40 hrs)", issuer: "Dar Al-Hikma Center", type: "course" },
  { id: "cert-6", title: "Introduction to Adobe Illustrator (20 hrs)", issuer: "Mosul Space", type: "course" },
  { id: "cert-7", title: "MS Office Course (20 hrs)", issuer: "C.G.T.", type: "course" },
  { id: "cert-8", title: "MS Excel Course (20 hrs)", issuer: "Y.S.P.", type: "course" },
  { id: "cert-9", title: "Digital Marketing Fundamentals Workshop", issuer: "Workshop", type: "workshop" },
  { id: "cert-10", title: "Basics of German Language Course (2 weeks)", issuer: "I.V.O.", type: "course" },
  { id: "cert-11", title: "Engineering Sustainability Competition", issuer: "U.O. Mosul", type: "event" },
  { id: "cert-12", title: "Noor Art Magazine Participation", issuer: "Magazine", type: "event" },
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "1st Place in Turkish Language Course",
    year: "2022",
    description: "Achieved first place in the Turkish language course examination.",
  },
  {
    id: "ach-2",
    title: "Honored by Nineveh Directorate of Education",
    year: "2024",
    description: "Recognized for academic excellence in the final year of high school.",
  },
  {
    id: "ach-3",
    title: "Full Exemption from Final Exams",
    year: "2023",
    description: "Awarded full exemption from final exams in 5th preparatory due to outstanding academic performance.",
  },
];

export const skills: Skill[] = [
  // Technical
  { id: "skill-1", name: "Adobe Illustrator", category: "technical", level: 90 },
  { id: "skill-2", name: "Adobe XD", category: "technical", level: 85 },
  { id: "skill-3", name: "Adobe InDesign", category: "technical", level: 80 },
  { id: "skill-4", name: "Canva", category: "technical", level: 95 },
  { id: "skill-5", name: "Photography & Photo Editing", category: "technical", level: 75 },
  { id: "skill-6", name: "Video Editing", category: "technical", level: 70 },
  { id: "skill-7", name: "C++", category: "technical", level: 65 },
  { id: "skill-8", name: "Python", category: "technical", level: 60 },
  { id: "skill-9", name: "Sketchware", category: "technical", level: 80 },
  { id: "skill-10", name: "Microsoft Office Suite", category: "technical", level: 90 },
  // Soft
  { id: "skill-11", name: "Team Leadership", category: "soft" },
  { id: "skill-12", name: "Effective Communication", category: "soft" },
  { id: "skill-13", name: "Teamwork & Collaboration", category: "soft" },
  { id: "skill-14", name: "Emotional Intelligence", category: "soft" },
  { id: "skill-15", name: "Problem Solving", category: "soft" },
  // Languages
  { id: "skill-16", name: "Arabic", category: "language", proficiency: "Native" },
  { id: "skill-17", name: "Turkish", category: "language", proficiency: "B2" },
  { id: "skill-18", name: "English", category: "language", proficiency: "B2" },
  { id: "skill-19", name: "French", category: "language", proficiency: "Basics" },
  { id: "skill-20", name: "German", category: "language", proficiency: "Basics" },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Al-Bu'rah Engineering Magazine",
    category: "Design",
    description: "Complete magazine design including layout, typography, and visual identity for the University of Mosul. A comprehensive publication showcasing engineering excellence.",
    tags: ["Adobe InDesign", "Adobe Illustrator", "Typography", "Layout Design"],
  },
  {
    id: "proj-2",
    title: "School Communication App",
    category: "Programming",
    description: "Android application developed using Sketchware for remote homework delivery and announcements during the COVID-19 pandemic. Used by multiple schools.",
    tags: ["Sketchware", "Android", "Educational Tech"],
  },
  {
    id: "proj-3",
    title: "Social Media Visual Campaigns",
    category: "Design",
    description: "Designed posters and social media visuals for multiple clients including Shams Al-Adab, Mustafa's Math, Hosh Al-Khan, DDM Channel, and Alajwad.",
    tags: ["Adobe Illustrator", "Canva", "Social Media", "Branding"],
  },
  {
    id: "proj-4",
    title: "UI/UX Design Project for Anas",
    category: "Design",
    description: "Complete UI/UX design project using Adobe XD, creating intuitive user interfaces and seamless user experiences.",
    tags: ["Adobe XD", "UI Design", "UX Research"],
  },
  {
    id: "proj-5",
    title: "Math Tutoring Telegram Channel",
    category: "Engineering",
    description: "Managing a Telegram channel dedicated to supporting sixth preparatory students in mathematics, providing free exam questions and guidance.",
    tags: ["Education", "Mathematics", "Community Building"],
  },
];

export const galleryImages: GalleryImage[] = [
  // Placeholder images for future expansion
  { id: "gal-1", src: "/placeholder-1.jpg", alt: "Design Work Sample 1", category: "Design" },
  { id: "gal-2", src: "/placeholder-2.jpg", alt: "Design Work Sample 2", category: "Design" },
  { id: "gal-3", src: "/placeholder-3.jpg", alt: "Engineering Project 1", category: "Engineering" },
  { id: "gal-4", src: "/placeholder-4.jpg", alt: "Programming Project 1", category: "Programming" },
  { id: "gal-5", src: "/placeholder-5.jpg", alt: "Design Work Sample 3", category: "Design" },
  { id: "gal-6", src: "/placeholder-6.jpg", alt: "Certificate Collection", category: "Certificates" },
];

export const events = [
  "Virtual Youth Lead Dialogue – United Nations",
  "Introduction workshop about IELTS – The Station",
  "The Design Journey: From Sketch to Interactive Prototype – GDG Al-Iraqia",
  "Emotional Intelligence workshop – Y.S.P organization",
];
