import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User.entity";

enum ContactCategory {
  work = "work",
  family = "family",
  school = "school",
  friends = "friends",
  standard = "standard",
}

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

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
