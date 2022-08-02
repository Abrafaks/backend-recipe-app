import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Recipe } from '@prisma/client';
import { CreateRecipeBody } from './input/createRecipeBody';

import { GetAllRecipesQuery } from './input/getAllRecipesQuery';
import { UpdateRecipeBody } from './input/updateRecipeBody';

import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get(':id')
  async getRecipeById(@Param('id') id: string): Promise<Recipe> {
    return this.recipeService.getRecipeById({ id });
  }

  @Get()
  async getAllRecipes(
    @Query()
    query: GetAllRecipesQuery,
  ): Promise<Recipe[]> {
    return await this.recipeService.getAllRecipes(query);
  }

  @Post()
  async createRecipe(
    @Body()
    data: CreateRecipeBody,
  ): Promise<Recipe> {
    return await this.recipeService.createRecipe(data);
  }

  @Put(':id')
  async updateRecipe(
    @Param('id') id: string,
    @Body()
    data: UpdateRecipeBody,
  ): Promise<Recipe> {
    return this.recipeService.updateRecipe({ where: { id }, data });
  }

  @Delete(':id')
  async deleteRecipe(@Param('id') id: string): Promise<Recipe> {
    return this.recipeService.deleteRecipe({ id });
  }
}
