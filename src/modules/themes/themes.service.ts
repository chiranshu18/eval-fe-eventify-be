import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Theme } from './themes.model';

@Injectable()
export class ThemesService {
  constructor(
    @InjectModel(Theme)
    private themeModel: typeof Theme,
    private readonly sequelize: Sequelize,
  ) {}

  findAll(): Promise<Partial<Theme[]>> {
    return this.themeModel.findAll({
      attributes: { exclude: ['isActive'] },
    });
  }

  findOneActive(): Promise<Partial<Theme>> {
    return this.themeModel.findOne({
      where: { isActive: true },
    });
  }

  async updateActiveTheme(themeId: number) {
    const transaction = await this.sequelize.transaction();
    try {
      await this.themeModel.update(
        { isActive: false },
        { where: {}, transaction },
      );
      const res = await this.themeModel.update(
        { isActive: true },
        { where: { id: themeId }, transaction },
      );

      // No rows were updated
      if (res[0] == 0) {
        throw new BadRequestException('Invalid Theme Id');
      }

      // commit the transaction if all queries are successful
      await transaction.commit();
    } catch (err) {
      // rollback the transaction if any query fails
      await transaction.rollback();
      throw new BadRequestException(err.message);
    }
  }
}
