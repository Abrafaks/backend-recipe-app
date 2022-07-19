import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PaginateQuery } from './paginateQuery';

enum Order {
  asc = 'asc',
  desc = 'desc',
}

enum SortBy {
  id,
  name,
  description,
  image,
  ingredients,
  steps,
  createdAt,
  updatedAt,
}

export class GetAllRecipesQuery extends PaginateQuery {
  @IsOptional()
  @IsString()
  search: string;

  @IsEnum(SortBy)
  @IsOptional()
  sortBy?: SortBy;

  @IsEnum(Order)
  @IsOptional()
  order?: Order = Order.asc;
}
