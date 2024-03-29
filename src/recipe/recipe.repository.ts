import { Injectable } from '@nestjs/common';
import { Prisma, Recipe } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllRecipesQuery } from './input/getAllRecipesQuery';

@Injectable()
export class RecipeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getRecipeById(
    recipeWhereUniqueInput: Prisma.RecipeWhereUniqueInput,
  ): Promise<Recipe | null> {
    return this.prisma.recipe.findUnique({
      where: recipeWhereUniqueInput,
    });
  }

  async getAllRecipes(params: GetAllRecipesQuery): Promise<Recipe[]> {
    const { page, pageSize, search, order, sortBy } = params;

    const take = pageSize;
    const skip = page * take;
    const whereQuery: Prisma.RecipeFindManyArgs = { skip, take };

    if (search) {
      whereQuery.where = {
        OR: [
          { name: { contains: search } },
          { description: { contains: search, mode: 'insensitive' } },
        ],
      };
    }

    if (sortBy) {
      whereQuery.orderBy = { [sortBy]: order };
    }

    return this.prisma.recipe.findMany(whereQuery);
  }

  async createRecipe(data: Prisma.RecipeCreateInput): Promise<Recipe> {
    return this.prisma.recipe.create({
      data,
    });
  }

  async updateRecipe(params: {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.RecipeUpdateInput;
  }): Promise<Recipe> {
    const { where, data } = params;
    return this.prisma.recipe.update({
      where,
      data,
    });
  }

  async deleteRecipe(where: Prisma.RecipeWhereUniqueInput): Promise<Recipe> {
    return this.prisma.recipe.delete({
      where,
    });
  }
}
