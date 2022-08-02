import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Recipe } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllRecipesQuery } from './input/getAllRecipesQuery';
import { RecipeRepository } from './recipe.repository';

@Injectable()
export class RecipeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly recipeRepository: RecipeRepository,
  ) {}

  async getRecipeById(
    recipeWhereUniqueInput: Prisma.RecipeWhereUniqueInput,
  ): Promise<Recipe | null> {
    const recipe = await this.recipeRepository.getRecipeById(
      recipeWhereUniqueInput,
    );

    if (!recipe) {
      throw new NotFoundException(
        'Recipe with id ' + recipeWhereUniqueInput.id + ' not found',
      );
    }

    return recipe;
  }

  async getAllRecipes(params: GetAllRecipesQuery): Promise<Recipe[]> {
    return this.recipeRepository.getAllRecipes(params);
  }

  async createRecipe(data: Prisma.RecipeCreateInput): Promise<Recipe> {
    return this.recipeRepository.createRecipe(data);
  }

  async updateRecipe(params: {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.RecipeUpdateInput;
  }): Promise<Recipe> {
    const recipeToUpdate = await this.recipeRepository.getRecipeById(
      params.where,
    );

    if (!recipeToUpdate)
      throw new NotFoundException(
        'Recipe with id ' + params.where.id + ' not found',
      );

    return this.recipeRepository.updateRecipe(params);
  }

  async deleteRecipe(where: Prisma.RecipeWhereUniqueInput): Promise<Recipe> {
    const recipeToDelete = await this.recipeRepository.getRecipeById(where);

    if (!recipeToDelete) {
      throw new NotFoundException('Recipe with id ' + where.id + ' not found');
    }

    return this.recipeRepository.deleteRecipe(where);
  }
}
