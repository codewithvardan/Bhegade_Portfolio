/**
 * Image paths, alt text, and placeholder labels.
 * Place image files in /public/images/ using these filenames.
 * Missing files show a clean placeholder automatically.
 */

export type PortfolioImage = {
  id: string;
  src: string;
  alt: string;
  placeholderLabel: string;
};

export const images = {
  hero: {
    id: "hero",
    src: "/images/hero.png",
    alt: "Portrait of Krishnarao Dhondiba Bhegade in formal attire",
    placeholderLabel: "Hero portrait",
  },
  family: {
    id: "family",
    src: "/images/family.jpg",
    alt: "Family photograph placeholder",
    placeholderLabel: "Family photograph",
  },
} as const;
