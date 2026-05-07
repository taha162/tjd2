import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Taha Jasim Mohammed | Mechatronics Engineer & Designer",
  description:
    "Portfolio of Taha Jasim Mohammed Syala - Mechatronics Engineering student, Graphic Designer, and UI/UX Designer based in Mosul, Iraq.",
  keywords: [
    "Mechatronics Engineer",
    "Graphic Designer",
    "UI/UX Designer",
    "Portfolio",
    "Mosul",
    "Iraq",
    "Adobe Illustrator",
    "Adobe XD",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Taha Jasim Mohammed" }],
  openGraph: {
    title: "Taha Jasim Mohammed | Portfolio",
    description: "Mechatronics Engineer & Creative Designer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Jasim Mohammed | Portfolio",
    description: "Mechatronics Engineer & Creative Designer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
