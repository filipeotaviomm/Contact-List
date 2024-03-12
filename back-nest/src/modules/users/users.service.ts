import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {} //a documentação pede esse constructor
  async create(createUserDto: CreateUserDto) {
    const foundUser = await this.prisma.user.findFirst({
      where: { email: createUserDto.email },
    });
    if (foundUser) {
      throw new ConflictException('User already exists');
    }
    const user = new User();
    Object.assign(user, createUserDto); // aqui user recebe todas as chaves e valores
    await this.prisma.user.create({ data: { ...user } });
    return plainToInstance(User, user);
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return plainToInstance(User, users);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return plainToInstance(User, user);
  }

  // método feito para ser usado no "auth.service"
  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({ where: { email } });
    return user; // aqui não coloca o plainToInstance, pois vai precisar do password
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const { email } = updateUserDto;

    if (email) {
      const foundUserByEmail = await this.prisma.user.findFirst({
        where: { email: updateUserDto.email },
      });
      if (foundUserByEmail && foundUserByEmail.id !== id) {
        throw new ConflictException('This email already exists');
      }
    }
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: { ...updateUserDto },
    });
    return plainToInstance(User, updatedUser);
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.prisma.user.delete({ where: { id } });
  }
}
