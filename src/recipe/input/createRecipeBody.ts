import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateRecipeBody {
  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  name: string;

  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  description: string;

  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  image: string;

  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  ingredients: string;

  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  steps: string;
}
