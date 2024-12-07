export interface Reservation {
  id: string;
  serviceId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed';
  price: number;
}