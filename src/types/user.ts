export interface User {
  uid: string;
  status: 'authenticated' | 'not-authenticated' | 'pending';
  displayName: string;
  email: `${string}@${string}.com`;
}
