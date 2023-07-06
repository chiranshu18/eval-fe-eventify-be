import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ThemesController } from './themes.controller';
import { Theme } from './themes.model';
import { ThemesService } from './themes.service';

@Module({
  imports: [SequelizeModule.forFeature([Theme])],
  controllers: [ThemesController],
  providers: [ThemesService],
})
export class ThemesModule {}
