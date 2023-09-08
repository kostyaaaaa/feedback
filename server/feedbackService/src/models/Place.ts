import {
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  HasMany,
  AllowNull,
  Unique,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import Feedback from './Feedback';
import User from './User';

@Table
class Place extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @HasMany(() => Feedback, { onDelete: 'CASCADE' })
  feedbacks: Feedback[];

  @ForeignKey(() => User)
  ownerId: User;

  @AllowNull(false)
  @Unique
  @Column
  address: string;

  @AllowNull(false)
  @Column
  name: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [] })
  photos: Array<string>;

  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [] })
  tags: Array<string>;

  @Column({ type: DataType.STRING(1000) })
  description: string;

  @BelongsTo(() => User)
  owner: User;
}

export default Place;
