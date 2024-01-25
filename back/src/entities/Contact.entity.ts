import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User.entity";

enum ContactCategory {
  work = "Trabalho",
  family = "Família",
  school = "Escola",
  friends = "Amigos",
  standard = "Padrão",
}

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 15 })
  phone: number | string;

  @Column({
    length: 20,
    enum: ContactCategory,
    default: ContactCategory.standard,
  })
  category: ContactCategory;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User[];
}

export default Contact;
