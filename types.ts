import type { ReactElement } from 'react';

export interface Service {
  // Fix: Use `ReactElement` to avoid JSX namespace error in a .ts file.
  icon: ReactElement;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  // Fix: Update type to string to allow for combined grid span classes.
  span: string;
  description?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  // Fix: Use `ReactElement` to avoid JSX namespace error in a .ts file.
  icon: ReactElement;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}