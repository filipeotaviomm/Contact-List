import { ApiProperty } from '@nestjs/swagger';
import { Categories } from '@prisma/client';
import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateContactDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  email: string | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  phone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsIn(['family', 'friends', 'work', 'school', 'standard'])
  category: Categories;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isFavorite: boolean;
}
