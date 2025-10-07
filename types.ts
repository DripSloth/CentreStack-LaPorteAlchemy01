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
  span: 'col-span-1' | 'col-span-2' | 'row-span-1' | 'row-span-2';
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
