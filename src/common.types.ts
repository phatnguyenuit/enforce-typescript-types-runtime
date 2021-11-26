export interface Product {
  id: number;
  name: string;
  quantity: number;
  type: 'FURNITURE' | 'BOOK';
}

export type FastType = string | number;
