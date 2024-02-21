import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Max,
  Min,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import Place from './Place';
import User from './User';

@Table
class Feedback extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  authorId: number;

  @ForeignKey(() => Place)
  @Column
  placeId: number;

  @Min(1)
  @Max(5)
  @Column(DataType.FLOAT)
  rate: number;

  @Column
  text: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [] })
  photos: Array<string>;

  @BelongsTo(() => User)
  author: User;

  @BelongsTo(() => Place)
  place: Place;
}

export default Feedback;
