"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Filter, ImageIcon } from "lucide-react";
import { galleryImages } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";

const categories = ["All", "Design", "Engineering", "Programming", "Certificates"];

function GalleryItem({ image, index, onClick }: { image: typeof galleryImages[0]; index: number; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-background-elevated border border-glass-border"
      onClick={onClick}
    >
      {/* Placeholder content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-16 h-16 rounded-2xl bg-glass border border-glass-border flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-foreground-muted" />
        </div>
        <div className="text-center px-4">
          <p className="text-sm text-foreground-muted font-medium">{image.alt}</p>
          <p className="text-xs text-foreground-subtle mt-1">{image.category}</p>
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-6"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <ZoomIn className="w-8 h-8 text-accent mx-auto mb-2" />
          <p className="text-foreground font-medium">{image.alt}</p>
          <p className="text-sm text-foreground-muted">{image.category}</p>
        </motion.div>
      </motion.div>

      {/* Glow border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/20 transition-colors duration-500" />
    </motion.div>
  );
}

function Lightbox({ image, onClose }: { image: typeof galleryImages[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-glass border border-glass-border flex items-center justify-center text-foreground hover:text-accent transition-colors z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-6 h-6" />
      </motion.button>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-4xl w-full aspect-video bg-background-elevated rounded-2xl border border-glass-border flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <ImageIcon className="w-16 h-16 text-foreground-muted mx-auto mb-4" />
          <h3 className="text-heading-1 text-foreground mb-2">{image.alt}</h3>
          <p className="text-body text-foreground-muted">{image.category}</p>
          <p className="text-sm text-foreground-subtle mt-4 max-w-md mx-auto">
            Images will be added here. This is a placeholder for your gallery content.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <SectionWrapper id="gallery">
      <SectionHeader
        title="Gallery"
        subtitle="A visual collection of design work, projects, and achievements"
      />

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
              activeCategory === category
                ? "text-foreground"
                : "text-foreground-muted hover:text-foreground"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="galleryFilter"
                className="absolute inset-0 bg-glass border border-glass-border rounded-lg"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              {category}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Masonry grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
