// interfaces/index.ts

// ============================================
// COMMON COMPONENT PROPS
// ============================================

// Props for a Card component
export interface CardProps {
  title: string;
  description?: string; // optional
  imageUrl?: string;    // optional
  onClick?: () => void; // optional click handler
}

// Props for a Button component
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "custom";
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "full";
  bgColor?: string;   // Tailwind class for background color
  textColor?: string; // Tailwind class for text color
  href?: string;      // if provided, render as link
}

// ============================================
// PROPERTY-RELATED INTERFACES
// ============================================

// Review data structure
export interface Review {
  avatar: string;
  name: string;
  rating: number;
  comment: string;
}

// Base property data structure with common fields
export interface BaseProperty {
  id?: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

// PropertyCard specific props - minimal data for card display
export interface PropertyCardProps extends BaseProperty {
  // Inherits: name, address, rating, category, price, offers, image, discount
  // No description or reviews needed for card view
}

// PropertyDetail specific props - full data including description and reviews
export interface PropertyDetailProps extends BaseProperty {
  description?: string;
  reviews?: Review[];
}

// ReviewSection specific props - only needs reviews array
export interface ReviewSectionProps {
  reviews: Review[];
}

// Generic PropertyProps type for general use
export type PropertyProps = BaseProperty & {
  description?: string;
  reviews?: Review[];
};