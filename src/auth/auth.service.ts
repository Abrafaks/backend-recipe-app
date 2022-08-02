import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async register(data: Prisma.UserCreateInput): Promise<User> {
    return this.userRepository.createUser(data);
  }
}
