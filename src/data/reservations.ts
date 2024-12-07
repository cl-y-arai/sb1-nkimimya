import { Reservation } from '../types/reservation';

export const reservations: Reservation[] = [
  {
    id: '1',
    serviceId: '1',
    date: '2024-03-25',
    status: 'confirmed',
    price: 12000
  },
  {
    id: '2',
    serviceId: '2',
    date: '2024-03-27',
    status: 'pending',
    price: 15000
  },
  {
    id: '3',
    serviceId: '3',
    date: '2024-03-30',
    status: 'completed',
    price: 13000
  }
];