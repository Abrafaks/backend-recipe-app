import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { CreateUserBody } from './input/createUserBody';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() createUserBody: CreateUserBody): Promise<User> {
    return this.authService.register(createUserBody);
  }
}
