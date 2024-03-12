import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  avatar: string;
  name: string;
  email: string;

  @Exclude()
  password: string;

  phone: string;
  readonly createdAt: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date().toISOString();
  }
}
