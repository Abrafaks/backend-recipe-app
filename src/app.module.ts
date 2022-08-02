import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RecipeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
