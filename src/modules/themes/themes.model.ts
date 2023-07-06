import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  modelName: 'themes',
  underscored: true,
  timestamps: false,
})
export class Theme extends Model<Theme> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  colorHexCode: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isActive: boolean;
}
