import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}
  async create(createContactDto: CreateContactDto, userId: string) {
    const contact = new Contact();
    Object.assign(contact, createContactDto);
    const newContact = await this.prisma.contact.create({
      data: {
        // name: contact.name,
        // email: contact.email,
        // phone: contact.phone,
        // category: contact.category,
        // isFavorite: contact.isFavorite,
        // userId,
        ...contact,
        userId,
      },
    });
    return newContact;
  }

  async findAll(userId: string) {
    const contacts = await this.prisma.contact.findMany({ where: { userId } });
    return contacts;
  }

  async findOne(contactId: string) {
    const contact = await this.prisma.contact.findUnique({
      where: { id: contactId },
    });
    return contact;
  }

  async update(contactId: string, updateContactDto: UpdateContactDto) {
    const contact = await this.prisma.contact.findUnique({
      where: { id: contactId },
    });
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    const updatedContact = await this.prisma.contact.update({
      where: { id: contactId },
      data: { ...updateContactDto },
    });
    return updatedContact;
  }

  async remove(contactId: string) {
    const contact = await this.prisma.contact.findUnique({
      where: { id: contactId },
    });
    if (!contact) {
      throw new NotFoundException('Contact not found');
    }
    await this.prisma.contact.delete({ where: { id: contactId } });
  }
}
