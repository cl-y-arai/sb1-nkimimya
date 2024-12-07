export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  imageUrl: string;
  fullDescription?: string;
  benefits?: string[];
  includes?: string[];
}