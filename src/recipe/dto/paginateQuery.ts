import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';

export class PaginateQuery {
  static defaultPageSize = 25;
  static defaultPage = 0;
  static maxPageSize = 2000;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  page: number = PaginateQuery.defaultPage;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(PaginateQuery.maxPageSize)
  pageSize: number = PaginateQuery.defaultPageSize;
}
