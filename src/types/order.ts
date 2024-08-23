import { Book } from './book';

export interface Order {
  orderId: string;
  orderedProducts: Book[] | undefined | null;
  statusOrder: 'in-comming' | 'fullfiled' | 'pending';
  date: number;
}
