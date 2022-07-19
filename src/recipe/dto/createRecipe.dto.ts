import { IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  ingredients: string;

  @IsString()
  steps: string;
}
