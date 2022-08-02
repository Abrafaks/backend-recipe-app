import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';

@Module({
  providers: [AuthService, PrismaService, UserRepository],
  controllers: [AuthController],
})
export class AuthModule {}
