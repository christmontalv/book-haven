type Genders = 'Romance' | 'Action' | 'Terror' | 'Suspense';

export interface Book {
  id: string;
  title: string;
  description: string;
  author: string;
  genders: Genders[];
  photoURL: string;
  price: number;
  stock: number;
}
