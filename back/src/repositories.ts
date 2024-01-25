import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { Contact, User } from "./entities";

const userRepo: Repository<User> = AppDataSource.getRepository(User);
const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

export { userRepo, contactRepo };
