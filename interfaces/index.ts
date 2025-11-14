// interfaces/index.ts

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
export type PropertyProps = {
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
  description?: string; // added for PropertyDetail
  reviews?: {
    avatar: string;
    name: string;
    rating: number;
    comment: string;
  }[]; // added for ReviewSection
};