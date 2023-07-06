import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateActiveTheme } from './themes.dto';
import { ThemesService } from './themes.service';

@Controller('api/themes')
export class ThemesController {
  constructor(private themesService: ThemesService) {}

  @Get()
  async findAll() {
    const [themes, preferedThemeId] = await Promise.all([
      this.themesService.findAll(),
      this.themesService.findOneActive(),
    ]);

    return {
      themes: themes,
      preferredThemeId: preferedThemeId.id,
    };
  }

  @Put()
  @UsePipes(new ValidationPipe({ transform: true }))
  @HttpCode(HttpStatus.OK)
  async updateActiveTheme(@Body() body: UpdateActiveTheme) {
    await this.themesService.updateActiveTheme(body.preferredThemeId);
    return 'Theme Updated!!!';
  }
}
