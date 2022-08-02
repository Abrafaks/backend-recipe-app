import { Prisma } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsString, Length } from 'class-validator';

export class CreateUserBody implements Prisma.UserCreateInput {
  @IsString()
  @Length(6, 255)
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  login: string;

  @IsString()
  @Length(8, 255)
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  password: string;
}
