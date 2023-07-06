import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  modelName: 'events',
  underscored: true,
  timestamps: false,
})
export class Event extends Model<Event> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  venue: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  datetime: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  timezone: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  areSeatsAvailable: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isRegistered: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isBookmarked: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  imgUrl: string;
}
