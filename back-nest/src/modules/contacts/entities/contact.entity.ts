import { Categories } from '@prisma/client';
import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  phone: string;
  category: Categories;
  isFavorite: boolean;
  userId: string;
  readonly createdAt: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date().toISOString();
    this.isFavorite = this.isFavorite ?? false;
  }
}
