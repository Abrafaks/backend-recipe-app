import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRecipeBody {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  name?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  description?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  image?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  ingredients?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.trim();
    }
  })
  steps?: string;
}
